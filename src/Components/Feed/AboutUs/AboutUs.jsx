import "./AboutUs.css";
import FeedHeader from "../FeedHeader";
import {
  Integrity,
  Transparent,
  CustomerValue,
  Collabration,
  Innvoation,
  Excellence,
} from "../../../assets";

const AboutUs = () => {
  return (
    <>
      <FeedHeader title="About Us" />
      <div className="main-container">
        <h3>We are a propellant and ready to change lives.</h3>
        <div className="values">
          <div className="value-item">
            <img src={Excellence} alt="" />
          </div>
          <div className="value-item">
            <img src={Innvoation} alt="" />
          </div>
          <div className="value-item">
            <img src={Integrity} alt="" />
          </div>
        </div>
        <div className="values">
          <div className="value-item">
            <img src={Collabration} alt="" />
          </div>
          <div className="value-item">
            <img src={CustomerValue} alt="" />
          </div>
          <div className="value-item">
            <img src={Transparent} alt="" />
          </div>
        </div>
        <div className="explain-value">
          <div className="explain-content">
            <h2>Comprehensive range of solutions</h2>
            <p>
              After examining deeply about your business model we come up with a
              varied and comprehensive range of solutions in a most affordable
              range
            </p>
          </div>
          <div className="explain-content">
            <h2>Comprehensive range of solutions</h2>
            <p>
              After examining deeply about your business model we come up with a
              varied and comprehensive range of solutions in a most affordable
              range
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default AboutUs;
