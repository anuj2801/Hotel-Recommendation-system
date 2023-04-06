import mongoose from "mongoose";

const HotelSchema = new mongoose.Schema({
  area: {
    type: String,
    required: true,
  },
  city: {
    type: String,
    required: true,
  },
  hotel_overview: {
    type: String,
    required: true,
  },
  hotel_star_rating: {
    type: Number,
    min: 0,
    max: 5,
  },
  in_your_room: {
    type: String,
    required: true,
  },
  latitude: {
    type: mongoose.Types.Decimal128,
    required: true,
  },
  longitude: {
    type: mongoose.Types.Decimal128,
    required: true,
  },
  pageurl: {
    type: String,
    required: true,
  },
  property_address: {
    type: String,
    required: true,
  },
  uniq_id: {
    type: String,
    required: true,
  },
  rooms: {
    type: Number,
    required: true,
  },
});

export default mongoose.model("Hotel", HotelSchema)