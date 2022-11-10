import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./Pages/Home";
import AddBlog from "./Pages/AddBlog";
import Login from "./Pages/Login";
import './App.css';

function App() {
  return (
    <BrowserRouter>
    <Routes>
  

      <Route path="/" element={<Home />}/>
      <Route path="/login" element={<Login />}/>
      <Route path="/Addblog" element={<AddBlog/>}/>
     

    </Routes>
    </BrowserRouter>
  );
}

export default App;
