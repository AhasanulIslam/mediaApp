import { BrowserRouter, Route, Routes } from "react-router-dom";
import Approve from "./component/Admin/AdminPanal.jsx/Approve";
import Follow from "./component/Admin/AdminPanal.jsx/Follow";
import Home from "./component/Admin/AdminPanal.jsx/Home";
import Reject from "./component/Admin/AdminPanal.jsx/Reject";
import From from "./component/SignUp/From";
import Login from "./component/Login/Login";
import QuizFrom from "./component/Admin/Tutor.jsx/QuizFrom";
import Navber from "./component/Navber";
import Profile from "./component/Admin/AdminPanal.jsx/Profile";
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
          <Route path="/approvepage" element={<Follow />}></Route>
          <Route path="/aprrove" element={<Approve />}></Route>
          <Route path="/rej" element={<Reject />}></Route>
          <Route path="/av" element={<CustomizedTables />}></Route>
          <Route path="/quizfm" element={<QuizFrom />}></Route>
          <Route path="/studentlist" element={<Profile />}></Route>
          <Route path="/quizde" element={<Home />}></Route>
          <Route path="/createpost" element={<CreatePost />}></Route>




        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
