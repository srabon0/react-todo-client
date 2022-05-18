import React, { useRef } from "react";
import { Link, useNavigate } from "react-router-dom";
import auth from "../../firebase.init";
import { useCreateUserWithEmailAndPassword } from 'react-firebase-hooks/auth';


const Signup = () => {
    const emailRef = useRef("");
  const passwordRef = useRef("");
  const [createUserWithEmailAndPassword, user, loading, error] =
    useCreateUserWithEmailAndPassword(auth);
 
  const navigate = useNavigate();
 
  const navigateLogin = () => {
    navigate("/login");
  };
  if (loading) {
    return (
      <div className="spinner-border" role="status">
        <span className="visually-hidden">Loading...</span>
      </div>
    );
  }

  if (user) {
    navigate("/");
  }
  const handleSignup = async (event) => {
    event.preventDefault();
    const email = emailRef.current.value;
    const password = passwordRef.current.value;
   

    await createUserWithEmailAndPassword(email, password);
  };
  return (
    <div>
      <form onSubmit={handleSignup}>
        <div className="mb-3">
          <label className="form-label">Email address</label>
          <input
            type="email"
            className="form-control"
            name="email"
            ref={emailRef}
            aria-describedby="emailHelp"
          />
        </div>
        <div className="mb-3">
          <label className="form-label">Password</label>
          <input   ref={passwordRef} type="password" className="form-control" name="password" />
        </div>
        <p>
          Already have an account?{" "}
          <Link
            to="/login"
            className="text-danger pe-auto text-decoration-none"
            onClick={navigateLogin}
          >
            Please Login
          </Link>{" "}
        </p>

        <input type="submit" className="btn btn-primary" value="sign up" />
      </form>
    </div>
  );
};

export default Signup;
