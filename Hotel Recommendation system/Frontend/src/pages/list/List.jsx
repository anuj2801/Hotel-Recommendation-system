import "./list.css";
import Navbar from "../../components/navbar/Navbar";
import Header from "../../components/header/Header";
import { useLocation } from "react-router-dom";
import { useEffect, useState } from "react";
import { format } from "date-fns";
import { DateRange } from "react-date-range";
// import SearchItem from "../../components/searchItem/SearchItem";
import SearchItem from "../../components/searchItem/SearchItem";
import useFetch from "../../hooks/useFetch";
import axios from "axios";

const List = () => {
  const location = useLocation();
  const [destination, setDestination] = useState(location.state.destination);
  const [dates, setDates] = useState(location.state.dates);
  const [openDate, setOpenDate] = useState(false);
  const [options, setOptions] = useState(location.state.options);
  const [min, setMin] = useState(undefined);
  const [max, setMax] = useState(undefined);

  const [rating, setrating] = useState(0);
  const [cityes, setcityes] = useState([]);

  const fetchHotel = async () => {
    try {
      console.log('search for destination =>', destination);
      console.log('rating =>', rating);
      if (destination.length == 0) {
        return;
      }
      let res;
      if (rating == 0) {
        res = await axios.get("http://localhost:8800/api/hotels/" + destination);
      } else {
        res = await axios.get("http://localhost:8800/api/hotels/getHotelsByRating/" + destination + "/" + rating);
      }
      setcityes(res.data);
    } catch (error) {
      console.log(error);
    }
  }

  useEffect(() => {
    fetchHotel();
  }, [])

  return (
    <div>
      <Navbar />
      <Header type="list" />
      <div className="listContainer">
        <div className="listWrapper">
          <div className="listSearch">
            <h1 className="lsTitle">Search</h1>
            <div className="lsItem">
              <label>Destination</label>
              <input placeholder={destination} onChange={(e) => setDestination(e.target.value)} type="text" />
            </div>
            <div className="lsOptionItem">
              <span className="lsOptionText" style={{ 'marginBottom': '5px' }}>Ratting</span>
              <input
                type="text"
                min={1}
                className="lsOptionInput"
                placeholder="Give star ratting [1-5]"
                onChange={(e) => setrating(e.target.value-'0')}
              />
            </div>
            <button onClick={fetchHotel}>Search</button>
          </div>
          <div className="listResult">
            {(
              <>
                {cityes.length > 0 ? cityes.map((item) => (
                  <SearchItem item={item} key={item._id} />
                )) : <h1 style={{ 'textAlign': 'center' }}>No Hotels</h1>}
              </>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default List;
