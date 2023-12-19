// Sidebar/Sidebar.jsx


import Signup from './SignUp.jsx';
import Signin from './SignIn.jsx';
import Sidemenu from './SideMenu.jsx';

const Sidebar = () => {
  return (
    <div className="sidebar-root">
      {/* ... Other components in the sidebar */}
      <Signup />
    </div>
  );
};

export default Sidebar;
