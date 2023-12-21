import "./FeedStatus.css";
import Card from "../../assets/ProfilePicture.jpg";
import FeedHeader from "./FeedHeader";



const FeedStatus = () => {
  return (
    <>
     <FeedHeader />
     <div className="MiniCard" >
     <img
              src ={Card}     
              className="card-image"
              alt="profile Picture"
  ></img>
     <h2> nebiyu yohannes</h2>
     <p>start up owner</p>
     <button className="btn"> raised</button>
     <p>$2,500</p>
     </div>
    </>
  );
};
export default FeedStatus;