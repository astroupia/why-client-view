import "./Feed.css";
import FeedHeader from "./FeedHeader";
/*import Card from "../../assets/ProfilePicture.jpg";*/
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
          <div className="btn-1">
            <button className="ntb">Raise</button>
            <p>$10,000</p>
          </div>
          <div className="btn-2">
            <button className="ntb">Goal</button>
            <p>$30,000</p>
          </div>
          <div className="btn-3">
            <button className="ntb-3">Subcriber</button>
            <div class="progress-bar">
              <div class="progress"></div>
            </div>
          </div>
        </div>
      </div>

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
          <div className="btn-1">
            <button className="ntb">Raise</button>
            <p>$10,000</p>
          </div>
          <div className="btn-2">
            <button className="ntb">Goal</button>
            <p>$30,000</p>
          </div>
          <div className="btn-3">
            <button className="ntb-3">Subcriber</button>
          </div>
        </div>
      </div>

      <div className="MiniCard">
        <div className="miniStatus">
          <img src={Card} className="circleImage" alt="profile Picture"></img>
          <div className="StatusDetail">
            <h2> nebiyu yohannes</h2>
            <p>start up owner</p>
            <button className="btn"> raised</button>
            <p>$2,500</p>
          </div>
        </div>
      </div>
    </>
  );
};
export default Feed;
