import Hotel from "../models/Hotel.js";
import Order from "../models/Order.js";

function titleCase(str) {
  var splitStr = str.toLowerCase().split(' ');
  for (var i = 0; i < splitStr.length; i++) {
      splitStr[i] = splitStr[i].charAt(0).toUpperCase() + splitStr[i].substring(1);     
  }
  return splitStr.join(' '); 
}

export const getHotels = async (req, res) => {
  try {
    let city = titleCase(req.params.cityname);
    const hotels = await Hotel.find({city:city});
    res.status(200).json(hotels);
  } catch (err) {
    next(err);
  }
};


export const getHotelsByRating = async (req, res) => {
  try {
    const city = titleCase(req.params.cityname);
    const rating = req.params.rating;
    console.log(city,rating);
    const hotels = await Hotel.find({city,hotel_star_rating:rating});
    console.log(hotels)
    res.status(200).json(hotels);
  } catch (err) {
    next(err);
  }
};

export const getHotelsByPrice = async (req, res) => {
  try {
    const city = titleCase(req.params.cityname);
    const rating = req.params.rating;
    console.log(city,rating);
    const hotels = await Hotel.find({city,hotel_star_rating:rating});
    console.log(hotels)
    res.status(200).json(hotels);
  } catch (err) {
    next(err);
  }
};


export const getHotelsById = async (req, res) => {
  try {
    const _id = req.params.id;
    const hotels = await Hotel.find({'uniq_id':_id});
    res.status(200).json(hotels);
  } catch (err) {
    next(err);
  }
};



export const updateHotel = async (req, res) => {
  try {
    //const {uniq_id} = req.body;
    const updatedHotel = await Hotel.findByIdAndUpdate(
      req.body._id,
      { $set: req.body },
      { new: true }
    );
    res.status(200).json(updatedHotel);
  } catch (err) {
    next(err);
  }
};


export const addHotel = async (req, res) => {
  try {
    //const {uniq_id} = req.body;
    const addHotel = new Hotel(req.body);
    console.log(req.body);
    const insertHotel = await addHotel.save();
    res.status(201).send(insertHotel);
  } catch (err) {
    next(err);
  }
};


export const order = async (req, res) => {
  try {
    const {_id,rooms}=req.body;
    const orderedHotel = await Hotel.findById(_id);
    orderedHotel.rooms = orderedHotel.rooms-rooms;
    res.status(200).json(orderedHotel);
  } catch (err) {
    next(err);
  }
};


// export const order = async (req, res) => {
//   try {
//     //const {uniq_id} = req.body;
//     const updatedHotel = await Hotel.findByIdAndUpdate(
//       req.body._id,
//       { $set: req.body },
//       { new: true }
//     );
//     res.status(200).json(updatedHotel);
//   } catch (err) {
//     next(err);
//   }
// };



// export const getHotels = async (req, res, next) => {
//   const { min, max, ...others } = req.query;
//   try {
//     const hotels = await Hotel.find({
//       ...others,
//       cheapestPrice: { $gt: min | 1, $lt: max || 999 },
//     }).limit(req.query.limit);
//     res.status(200).json(hotels);
//   } catch (err) {
//     next(err);
//   }
// };



// ------------------------------************-------------------------

export const createHotel = async (req, res, next) => {
  const newHotel = new Hotel(req.body);

  try {
    const savedHotel = await newHotel.save();
    res.status(200).json(savedHotel);
  } catch (err) {
    next(err);
  }
};

// export const updateHotel = async (req, res) => {
//   try {
//     //const {uniq_id} = req.body;
//     const updatedHotel = await Hotel.findByIdAndUpdate(
//       req.body._id,
//       { $set: req.body },
//       { new: true }
//     );
//     res.status(200).json(updatedHotel);
//   } catch (err) {
//     next(err);
//   }
// };

export const deleteHotel = async (req, res, next) => {
  try {
    await Hotel.findByIdAndDelete(req.params.id);
    res.status(200).json("Hotel has been deleted.");
  } catch (err) {
    next(err);
  }
};
export const getHotel = async (req, res, next) => {
  try {
    const hotel = await Hotel.findById(req.params.id);
    res.status(200).json(hotel);
  } catch (err) {
    next(err);
  }
};



export const countByCity = async (req, res, next) => {
  const cities = req.query.cities.split(",");
  try {
    const list = await Promise.all(
      cities.map((city) => {
        return Hotel.countDocuments({ city: city });
      })
    );
    res.status(200).json(list);
  } catch (err) {
    next(err);
  }
};

export const countByType = async (req, res, next) => {
  try {
    const hotelCount = await Hotel.countDocuments({ type: "hotel" });
    const apartmentCount = await Hotel.countDocuments({ type: "apartment" });
    const resortCount = await Hotel.countDocuments({ type: "resort" });
    const villaCount = await Hotel.countDocuments({ type: "villa" });
    const cabinCount = await Hotel.countDocuments({ type: "cabin" });

    res.status(200).json([
      { type: "hotel", count: hotelCount },
      { type: "apartments", count: apartmentCount },
      { type: "resorts", count: resortCount },
      { type: "villas", count: villaCount },
      { type: "cabins", count: cabinCount },
    ]);
  } catch (err) {
    next(err);
  }
};

export const getHotelRooms = async (req, res, next) => {
  try {
    const hotel = await Hotel.findById(req.params.id);
    const list = await Promise.all(
      hotel.rooms.map((room) => {
        return Room.findById(room);
      })
    );
    res.status(200).json(list)
  } catch (err) {
    next(err);
  }
};
