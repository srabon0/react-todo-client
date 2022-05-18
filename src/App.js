import { Routes, Route, useNavigate } from "react-router-dom";
import Home from "./components/Home/Home";
import Login from "./components/Login/Login";
import Signup from "./components/SignUp/Signup";
import RequireAuth from "./components/RequireAuth/RequireAuth";
import "react-toastify/dist/ReactToastify.css";

import { ToastContainer } from "react-toastify";
import { useAuthState } from "react-firebase-hooks/auth";
import auth from "./firebase.init";
import { signOut } from "firebase/auth";

function App() {
  const [user, loading, error] = useAuthState(auth);
  const navigate = useNavigate();
  const handleSignout = () => {
    signOut(auth);
  };
  if (loading) {
    return (
      <div className="container">
        <button class="btn btn-primary" type="button" disabled>
        <span
          class="spinner-border spinner-border-sm"
          role="status"
          aria-hidden="true"
        ></span>
        Loading...
      </button>
      </div>
    );
  }
  if(!user){
    navigate('/login')
  }

  return (
    <div className="container mt-5">
      <div className="d-flex justify-content-between align-items-center">
        <div>
        <h1 className="text-primary">My to do App</h1>
        </div>
        <div>
          {user && <span className="text-success fw-bold mx-3 border px-3 py-2" >{user?.email}</span>}
          {user && <button onClick={()=>handleSignout()} className="btn btn-lg btn-warning">signout</button>}
        </div>
      </div>

      <Routes>
        <Route path="/" element={<Home />} />
        <Route
          path="/home"
          element={
            <RequireAuth>
              <Home />
            </RequireAuth>
          }
        />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
      </Routes>

      <ToastContainer />
    </div>
  );
}

export default App;
