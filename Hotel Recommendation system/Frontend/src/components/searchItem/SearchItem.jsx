import { Link } from "react-router-dom";
import "./searchItem.css";
import { useEffect, useState } from "react";

const SearchItem = ({ item }) => {
  const [price,setprice] = useState(0);
  const [distance,setdistance] = useState(0);
  useEffect(()=>{
    let x = Math.floor((Math.random() * 1300) + 700);
    setprice(x);
    let y = Math.floor((Math.random() * 4) + 1);
    setdistance(y);
  },[])
  return (
    <div className="searchItem">
      <img src={"https://cf.bstatic.com/xdata/images/xphoto/square300/57584488.webp?k=bf724e4e9b9b75480bbe7fc675460a089ba6414fe4693b83ea3fdd8e938832a6&o="} alt="" className="siImg" />
      <div className="siDesc">
        <h1 className="siTitle">{item.property_name}</h1>
        <span className="siDistance">{distance} Km from your location</span>
        <span className="siTaxiOp">Free airport taxi</span>
        <span className="siSubtitle">
          {item.in_your_room}
        </span>
        {/* <span className="siFeatures">Good Hotel with all facilities</span> */}
        <span className="siCancelOp">Free cancellation </span>
        <span className="siCancelOpSubtitle">
          You can cancel later, so lock in this great price today!
        </span>
      </div>
      <div className="siDetails">
        {item.hotel_star_rating && <div className="siRating">
          {/* <span>Excellent</span> */}
          <button>{item.hotel_star_rating} ★</button>
        </div>}
        <div className="siDetailTexts">
          <span className="siPrice">₹ {price}</span>
          <span className="siTaxOp">Includes taxes and fees</span>
          <Link to={`/hotels/${item.uniq_id}`}>
            <button className="siCheckButton">See availability</button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default SearchItem;
