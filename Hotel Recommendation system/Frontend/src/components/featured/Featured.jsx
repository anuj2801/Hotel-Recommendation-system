import useFetch from "../../hooks/useFetch";
import "./featured.css";

const Featured = () => {
  const { data, loading, error } = useFetch(
    "/hotels/countByCity?cities=berlin,madrid,london"
  );

  return (
    <div className="featured">
      {loading ? (
        "Loading please wait"
      ) : (
        <>
          <div className="featuredItem">
            <img
              src="https://static.standard.co.uk/s3fs-public/thumbnails/image/2018/05/10/18/the-oberoi-grand-kolkata-01.jpg?width=968"
              alt=""
              className="featuredImg"
            />
            <div className="featuredTitles">
              <h1>Udaipur</h1>
              <h2>244 Hotels</h2>
            </div>
          </div>

          <div className="featuredItem">
            <img
              src="https://i.pinimg.com/originals/bd/9c/a5/bd9ca54700c597211e61edbeef01e1d1.jpg"
              alt=""
              className="featuredImg"
            />
            <div className="featuredTitles">
              <h1>Manali</h1>
              <h2>381 Hotels</h2>
            </div>
          </div>
          <div className="featuredItem">
            <img
              src="https://th.bing.com/th/id/OIP.vofbbatF-SGK4GqXBiVMSwHaEK?pid=ImgDet&rs=1"
              alt=""
              className="featuredImg"
            />
            <div className="featuredTitles">
              <h1>Kolkata</h1>
              <h2>272 Hotels</h2>
            </div>  
          </div>
          <div className="featuredItem">
            <img
              src="https://s-ec.bstatic.com/images/hotel/max1024x768/430/43008657.jpg"
              alt=""
              className="featuredImg"
            />
            <div className="featuredTitles">
              <h1>Hyderabad</h1>
              <h2>474 Hotels</h2>
            </div>  
          </div>
          
          
        </>
      )}
    </div>
  );
};

export default Featured;
