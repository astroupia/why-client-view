import './App.css'
import { Feed, UserProfile, SideBar } from './Components'

const App = () => {
  return (
    <>
      <div className="main">
        <div id="side-bar">
          <SideBar />
        </div>
        <div id="feed">
          <Feed />
        </div>
        <div id="user-profile">
          <UserProfile />
        </div>
      </div>
    </>
  )
}

export default App
