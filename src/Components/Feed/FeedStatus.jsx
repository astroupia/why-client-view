import "./FeedStatus.css";
import Card from "../../assets/ProfilePicture.jpeg";
import FeedHeader from "./FeedHeader";

const FeedStatus = () => {
  return (
    <>
      <FeedHeader />
      <div className="MiniCard">
        <div className="card-image">
          <img src={Card} alt="profile Picture"></img>
        </div>
        <h2> nebiyu yohannes</h2>
        <p>start up owner</p>
        <button className="btn"> raised</button>
        <p>$2,500</p>
      </div>
    </>
  );
};
export default FeedStatus;
