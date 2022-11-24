import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./Pages/Home";
import AddBlog from "./Pages/AddBlog";
import Login from "./Pages/Login";
import Register from "./Pages/Register.js";
import './App.css';
import LogOut from "./Pages/Logout";
import { LoginState } from "./Context/LoginState";
import SingleBlog from "./Pages/SingleBlog";
function App() {
  return (
   <LoginState>
    <BrowserRouter>
    <Routes>

      <Route path="/" element={<Home/>}/>
      <Route path="/addblog" element={<AddBlog/>}/>
        <Route path="/register" element={<Register/>}/>
          <Route path="/login" element={<Login />} />
          <Route path="/blog/:slug" element={< SingleBlog/>} />
          <Route path="/Logout" element={<LogOut />} />
          
    </Routes>
      </BrowserRouter>
      </LoginState>
  );
}

export default App;
