import React, { useRef } from "react";
import { NavLink, useNavigate } from "react-router-dom";
import auth from "../../firebase.init";
import { useCreateUserWithEmailAndPassword } from 'react-firebase-hooks/auth';


const Signup = () => {
    const emailRef = useRef("");
  const passwordRef = useRef("");
  const [createUserWithEmailAndPassword, user, loading, error] =
    useCreateUserWithEmailAndPassword(auth);
 
  const navigate = useNavigate();
 
  if (loading) {
    return (
      <div className="spinner-border" role="status">
        <span className="visually-hidden">Loading...</span>
      </div>
    );
  }

  if (user) {
    const url = "https://still-falls-78959.herokuapp.com/login";
    const email = user.user.email;
    fetch(url, {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify({ email: email }),
    })
      .then((res) => res.json())
      .then((data) => {
        localStorage.setItem("accessToken", data.token);
        navigate("/");
      });
  }
  const handleSignup = async (event) => {
    event.preventDefault();
    const email = emailRef.current.value;
    const password = passwordRef.current.value;
    console.log(email,password)
   

    await createUserWithEmailAndPassword(email, password);
  };
  return (
    <div>
      <h1 className="text-primary">Sign up</h1>
      <form onSubmit={handleSignup}>
        <div className="mb-3">
          <label className="form-label">Email address</label>
          <input required
            type="email"
            className="form-control"
            name="email"
            ref={emailRef}
            aria-describedby="emailHelp"
          />
        </div>
        <div className="mb-3">
          <label className="form-label">Password</label>
          <input required   ref={passwordRef} type="password" className="form-control" name="password" />
        </div>
        <p>
          Already have an account?{" "}
          <NavLink
            to="/login"
            className="text-danger pe-auto text-decoration-none" 
          >
            Please Login
          </NavLink>
        </p>

        <input type="submit" className="btn btn-primary px-5" value="Sign up" />
      </form>
    </div>
  );
};

export default Signup;
