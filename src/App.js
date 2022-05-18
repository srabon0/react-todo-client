
import { Routes, Route, Link } from "react-router-dom";
import Home from "./components/Home/Home";
function App() {
  return (
    <div className="container mt-5">
      <h1 className='text-primary'>My to do App</h1>

      <Routes>
        <Route path="/" element={<Home/>} />
        
      </Routes>
      

   

    </div>
  );
}

export default App;

    
  

