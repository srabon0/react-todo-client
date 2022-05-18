
import { Routes, Route } from "react-router-dom";
import Home from "./components/Home/Home";
import Login from "./components/Login/Login";
import Signup from "./components/SignUp/Signup";
function App() {
  return (
    <div className="container mt-5">
      <h1 className='text-primary'>My to do App</h1>

      <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="/home" element={<Home/>} />
        <Route path="/login" element={<Login/>} />
        <Route path="/signup" element={<Signup/>} />
        
      </Routes>
      

   

    </div>
  );
}

export default App;

    
  

