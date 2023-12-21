// Sidebar/Sidebar.jsx
import { Route, Routes } from "react-router-dom";
import Signup from "./SignUp.jsx";
import Signin from "./SignIn.jsx";
import Sidemenu from "./SideMenu.jsx";

const Sidebar = () => {
  return (
    <div className="sidebar-root">
      <Routes>
        <Route exact path="/" Component={Sidemenu} />
        <Route exact path="/sign-in" Component={Signin} />
        <Route exact path="/sign-up" Component={Signup} />
      </Routes>
    </div>
  );
};

export default Sidebar;
