import "./FeedHeader.css";

const FeedHeader = () => {
  return (
    <>
      <div className="header">
        <div className="upper-header">
          <h1>Feed</h1>
        </div>
        <div className="category">
          <button className="btn">Raisers</button>
          <button className="btn">Health</button>
          <button className="btn">Event</button>
          <button className="btn">Start-Up</button>
        </div>
      </div>
    </>
  );
};

export default FeedHeader;
