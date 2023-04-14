import "./hotel.css";
import Navbar from "../../components/navbar/Navbar";
import Header from "../../components/header/Header";
import MailList from "../../components/mailList/MailList";
import Footer from "../../components/footer/Footer";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faCircleArrowLeft,
  faCircleArrowRight,
  faCircleXmark,
  faLocationDot,
} from "@fortawesome/free-solid-svg-icons";
import { useContext, useEffect, useState } from "react";
import useFetch from "../../hooks/useFetch";
import { useLocation, useNavigate } from "react-router-dom";
import { SearchContext } from "../../context/SearchContext";
import { AuthContext } from "../../context/AuthContext";
import Reserve from "../../components/reserve/Reserve";
import axios from "axios";

const Hotel = () => {
  const location = useLocation();
  const [hoteldata, sethoteldata] = useState({ '_id': '468736487634' });
  const [fetched, setfetched] = useState(false);

  const id = location.pathname.split("/")[2];
  console.log('hotel id=>', id);

  const fetchHotel = async () => {
    try {
      const res = await axios.get("http://localhost:8800/api/hotels/getHotelsById/" + id);
      console.log('hotel details', res.data[0])
      sethoteldata(res.data[0]);
      setfetched(true);
    } catch (error) {
      console.log(error);
    }
  }
  useEffect(() => {
    fetchHotel();
  }, [])

  // const [slideNumber, setSlideNumber] = useState(0);
  // const [open, setOpen] = useState(false);
  // const [openModal, setOpenModal] = useState(false);

  // const { data, loading, error } = useFetch(`/hotels/find/${id}`);
  // const { user } = useContext(AuthContext);
  const navigate = useNavigate();

  // const { dates, options } = useContext(SearchContext);

  // const MILLISECONDS_PER_DAY = 1000 * 60 * 60 * 24;
  // function dayDifference(date1, date2) {
  //   const timeDiff = Math.abs(date2.getTime() - date1.getTime());
  //   const diffDays = Math.ceil(timeDiff / MILLISECONDS_PER_DAY);
  //   return diffDays;
  // }

  // const days = dayDifference(dates[0].endDate, dates[0].startDate);

  // const handleOpen = (i) => {
  //   setSlideNumber(i);
  //   setOpen(true);
  // };

  // const handleMove = (direction) => {
  //   let newSlideNumber;

  //   if (direction === "l") {
  //     newSlideNumber = slideNumber === 0 ? 5 : slideNumber - 1;
  //   } else {
  //     newSlideNumber = slideNumber === 5 ? 0 : slideNumber + 1;
  //   }

  //   setSlideNumber(newSlideNumber);
  // };

  // const handleClick = () => {
  //   if (user) {
  //     setOpenModal(true);
  //   } else {
  //     navigate("/login");
  //   }
  // };

  return (
    <div>
      <Navbar />
      <Header type="list" />
      {/* <h1>{fetched ? hoteldata.property_name : ''}</h1>
      <h1>{fetched ? hoteldata.area : ''}</h1>
      <h1>{fetched ? hoteldata.city : ''}</h1>
      <h1>{fetched ? hoteldata.rooms : ''}</h1> */}
      <div className="hotelContainer">
        {/* <div className="slider">
          <FontAwesomeIcon
            icon={faCircleXmark}
            className="close"
            onClick={() => setOpen(false)}
          />
          <FontAwesomeIcon
            icon={faCircleArrowLeft}
            className="arrow"
            onClick={() => handleMove("l")}
          />
          <div className="sliderWrapper">
            <img
              src={data.photos[slideNumber]}
              alt=""
              className="sliderImg"
            />
          </div>
          <FontAwesomeIcon
            icon={faCircleArrowRight}
            className="arrow"
            onClick={() => handleMove("r")}
          />
        </div> */}
        <div className="hotelWrapper">
          <button className="bookNow">Reserve or Book Now!</button>
          <h1 className="hotelTitle">{hoteldata.property_name}</h1>
          <div className="hotelAddress">
            <FontAwesomeIcon icon={faLocationDot} />
            <span>{hoteldata.address}</span>
          </div>
          <span className="hotelDistance">
            Excellent location – {500}m from center
          </span>
          <span className="hotelPriceHighlight">
            Book a stay over $50 at this property and get a
            free airport taxi
          </span>
          <div className="hotelImages">
            <div className="hotelImgWrapper">
              <img
                src={"https://cf.bstatic.com/xdata/images/xphoto/square300/57584488.webp?k=bf724e4e9b9b75480bbe7fc675460a089ba6414fe4693b83ea3fdd8e938832a6&o="}
                alt=""
                className="hotelImg"
              />
            </div>
          </div>
          <div className="hotelDetails">
            <div className="hotelDetailsTexts">
              <h1 className="hotelTitle">Experience World-Class Service</h1>
              <p className="hotelDesc">Lorem ipsum dolor sit amet consectetur adipisicing elit. Placeat recusandae, minima repellendus obcaecati ullam atque provident dolor illum a natus adipisci facere magni iste excepturi officiis porro distinctio. Ad vitae voluptates, id blanditiis accusantium laboriosam alias inventore! Dolor ipsam voluptates non possimus sit. Optio voluptatem quis eaque? Corrupti unde, consequuntur consequatur quos, explicabo nihil voluptatibus similique dolor nam reprehenderit perferendis suscipit repudiandae incidunt expedita ullam excepturi culpa porro esse asperiores quas praesentium consectetur? Nulla dolores architecto officia! Accusantium, fuga voluptatum obcaecati ad quam ipsam enim praesentium rerum perspiciatis architecto, minus laudantium, magnam aut expedita rem doloremque numquam illo. Sequi facere nisi eaque, officiis dolore magnam dolorum fugit ad quo doloribus debitis reprehenderit dolorem doloremque pariatur aliquid tempore suscipit perspiciatis incidunt! Nobis, cumque recusandae?</p>
            </div>
            <div className="hotelDetailsPrice">
              <h1>Perfect for a days-night stay!</h1>
              <span>
                Located in the real heart of Krakow, this property has an
                excellent location score of 9.8!
              </span>
              <h2>
                <b>$300</b> (2{" "}
                nights) 
              </h2>
              <button>Reserve or Book Now!</button>
            </div>
          </div>
        </div>
        <MailList />
        <Footer />
      </div>
      {/* {openModal && <Reserve setOpen={setOpenModal} hotelId={id}/>} */}
    </div>
  );
};

export default Hotel;
