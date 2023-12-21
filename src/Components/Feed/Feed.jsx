import "./Feed.css";
import Card from "../../assets/MainCard.jpg";
import FeedHeader from "./FeedHeader";

// @author Nahom Teguade

const Feed = () => {
  return (
    <>
      <FeedHeader />
      <div className="main-card">
        <div className="img-container">
          <img src={Card} className="card-image" alt="profile Picture"></img>
        </div>
        <div className="content">
          <h3>Raising Capital for inhouse Ev Startup</h3>
          <h5>
            A unique Concept EV for everyday transport, leisure & Biking fun
          </h5>
        </div>
        <div className="status">
          <button className="btn">Raise</button>
          <button className="btn">Goal</button>
          <button className="btn">Subcriber</button>
        </div>
      </div>
    </>
  );
};
export default Feed;
