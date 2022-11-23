import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./Pages/Home";
import AddBlog from "./Pages/AddBlog";
import Login from "./Pages/Login";
import Register from "./Pages/Register.js";
import './App.css';
import LogOut from "./Pages/Logout";
import { LoginState } from "./Context/LoginState";
function App() {
  return (
   <LoginState>
    <BrowserRouter>
    <Routes>

      <Route path="/" element={<Home/>}/>
      <Route path="/Addblog" element={<AddBlog/>}/>
        <Route path="/register" element={<Register/>}/>
          <Route path="/login" element={<Login />} />
          <Route path="/Logout" element={<LogOut />} />
          
    </Routes>
      </BrowserRouter>
      </LoginState>
  );
}

export default App;
