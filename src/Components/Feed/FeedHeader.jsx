import "./FeedHeader.css";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons';
const FeedHeader = () => {
    return (
      <>
        <div className="header">
          <div className="upper-header">
            <h1>Feed</h1>
          </div>
          <div className="search">
          <div className="searchbar">
          <FontAwesomeIcon icon={faMagnifyingGlass} />
            
            <input type="text" className="form-control" placeholder="search"></input>
                     
          </div>
          </div>
          <div className="card-header">
            {/* <Link to="user-profile">
              <img
                src={Profile}
                className="profilePicture"
                alt="profile Picture"
              />
            </Link> */}
          </div>
        </div>
        <div className="category">
          <button className="btn">Raisers</button>
          <button className="btn">Health</button>
          <button className="btn">Event</button>
          <button className="btn">Start-Up</button>
          <button className="btn">Top-Raisers</button>
        </div>
    </>
  );
};

export default FeedHeader;
