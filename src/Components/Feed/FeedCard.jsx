import "./Feed.css";
import { Link } from "react-router-dom";
import Card from "../../assets/MainCard.jpg";

const FeedCard = () => {
  return (
    <>
      <div className="main-feed-card">
        <Link to="/Fund-detail">
          <div className="main-card">
            <div className="img-container">
              <img
                src={Card}
                className="card-image"
                alt="profile Picture"
              ></img>
            </div>
            <div className="content">
              <h3>Raising Capital for inhouse Ev Startup</h3>
              <h5>
                A unique Concept EV for everyday transport, leisure & Biking fun
              </h5>
            </div>
            <div className="status">
              <button className="btn">Raise</button>
              {/* <button className="btn">Goal</button> */}
              <button className="btn">Subcribe</button>
            </div>
          </div>
        </Link>
        <Link to="/Fund-detail">
          <div className="main-card">
            <div className="img-container">
              <img
                src={Card}
                className="card-image"
                alt="profile Picture"
              ></img>
            </div>
            <div className="content">
              <h3>Raising Capital for inhouse Ev Startup</h3>
              <h5>
                A unique Concept EV for everyday transport, leisure & Biking fun
              </h5>
            </div>
            <div className="status">
              <button className="btn">Raise</button>
              {/* <button className="btn">Goal</button> */}
              <button className="btn">Subcribe</button>
            </div>
          </div>
        </Link>
      </div>
    </>
  );
};

export default FeedCard;
