import FeedHeader from "../FeedHeader";
import Card from "../../../assets/MainCard.jpg";
import "./FundDetail.css";

const FundDetail = () => {
  return (
    <>
      <FeedHeader title="Fund Detail" />
      <div className="main-card-detail">
        <div className="img-container-detail">
          <img src={Card} className="card-image" alt="Fund Image"></img>
        </div>
        <div className="content">
          <h3>Raising Capital for inhouse Ev Startup</h3>
          <h5>
            A unique Concept EV for everyday transport, leisure & Biking fun
          </h5>
        </div>
        <div className="status-detail">
          <button className="btn">Raise</button>
          {/* <button className="btn">Goal</button> */}
          <button className="btn">Subcribe</button>
        </div>
        <div className="button-detail">
          <h2>Fund</h2>
        </div>
        <div className="document-detail">
          <div className="category-detail">
            <div className="category">
              <h3>Pitch</h3>
            </div>
            <div className="category">
              <h3>Photo</h3>
            </div>
          </div>
          <div className="file-detail">
            <div className="file">
              <h5>Company Certificate</h5>
            </div>
            <div className="file">
              <h5>Company Certificate</h5>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default FundDetail;
