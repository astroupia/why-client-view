import FeedHeader from "../FeedHeader";
import "./Terms.css";
import { Term1, Term2 } from "../../../assets";

const Terms = () => {
  return (
    <>
      <FeedHeader title="Terms" />

      <div className="term-container">
        <div className="term">
          <h2>1. Terms of Use:</h2>
          <div className="temr-image">
            <img src={Term1} alt="" />
          </div>
          <ul>
            <li>
              <p>
                Defines the terms under which users are allowed to access and
                use the app.
              </p>
            </li>
            <li>
              <p>
                Specifies the user's responsibilities and acceptable behavior
                while using the platform.
              </p>
            </li>
            <li>
              <p>
                Outlines prohibited activities, such as fraudulent behavior,
                spamming, or violating others' rights.
              </p>
            </li>
          </ul>
        </div>
        <div className="term">
          <h2>2. Privacy Policy:</h2>
          <div className="temr-image">
            <img src={Term2} alt="" />
          </div>
          <ul>
            <li>
              <p>
                Defines the terms under which users are allowed to access and
                use the app.
              </p>
            </li>
            <li>
              <p>
                Specifies the user's responsibilities and acceptable behavior
                while using the platform.
              </p>
            </li>
            <li>
              <p>
                Outlines prohibited activities, such as fraudulent behavior,
                spamming, or violating others' rights.
              </p>
            </li>
          </ul>
        </div>
      </div>
    </>
  );
};

export default Terms;
