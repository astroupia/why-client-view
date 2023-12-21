import "./App.css";
import { Route, Routes } from "react-router-dom";
import {
  Signin,
  Sidemenu,
  Signup,
  FundDetail,
  UserProfile,
  Feed,
  FeedStatus,
} from "./Components";

const App = () => {
  return (
    <>
      <div className="main">
        <div id="side-bar">
          <Sidemenu />
        </div>
        <div id="feed">
          <Routes>
            <Route exact path="/" Component={Feed} />
            <Route path="/sign-in" Component={Signin} />
            <Route path="/sign-up" Component={Signup} />
            <Route path="/Fund-detail" Component={FundDetail} />
            <Route path="/status" Component={FeedStatus} />
            <Route path="/user-profile" Component={UserProfile} />
          </Routes>
        </div>
        <div id="user-profile">
          <UserProfile />
        </div>
      </div>
    </>
  );
};

export default App;
