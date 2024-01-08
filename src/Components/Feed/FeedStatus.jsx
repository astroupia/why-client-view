import "./FeedStatus.css";
import Card from "../../assets/ProfilePicture.jpeg";
import FeedHeader from "./FeedHeader";

const FeedStatus = () => {
  return (
    <>
      <FeedHeader title="Raisers" />
      <div className="mini-card">
        <div className="image-status">
          <img src={Card} alt="profile Picture"></img>
        </div>
        <div className="description">
          <div className="content">
            <h2>Nebiyu Yohannes</h2>
            <p>Start Up Owner</p>
          </div>
          <div className="stat">
            <button className="btn">Raised</button>
            <h5>$2,500</h5>
          </div>
        </div>
      </div>
    </>
  );
};
export default FeedStatus;
