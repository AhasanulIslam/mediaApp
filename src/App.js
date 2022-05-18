import { BrowserRouter, Route, Routes } from "react-router-dom";
import Post from "./component/Admin/AdminPanal.jsx/Post";
import Follow from "./component/Admin/AdminPanal.jsx/Follow";
import Home from "./component/Admin/AdminPanal.jsx/Home";
import Unfollow from "./component/Admin/AdminPanal.jsx/Unfollow";
import From from "./component/SignUp/From";
import Login from "./component/Login/Login";
import Navber from "./component/Navber";
import Profile from "./component/Admin/AdminPanal.jsx/Profile/Profile.jsx";
import EditProfile from "./component/Admin/AdminPanal.jsx/EditProfile";
import CustomizedTables from "./component/Table";

import "./App.css";
import CreatePost from "./component/Admin/AdminPanal.jsx/Post/CreatePost";

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        {/* <From /> */}
        {/* <Login /> */}
        <Routes>
          <Route path="/signup" element={<From />}></Route>
          <Route path="/login" element={<Login />}></Route>
          <Route path="/" element={<Login />}></Route>
          <Route path="/nav" element={<Navber />}></Route>
          <Route path="/follow" element={<Follow />}></Route>
          <Route path="/aprrove" element={<Post />}></Route>
          <Route path="/unfollow" element={<Unfollow />}></Route>
          <Route path="/av" element={<CustomizedTables />}></Route>
          <Route path="/profile" element={<Profile />}></Route>
          <Route path="/home" element={<Home />}></Route>
          <Route path="/editprofile" element={<EditProfile />}></Route>
          <Route path="/createpost" element={<CreatePost />}></Route>




        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
