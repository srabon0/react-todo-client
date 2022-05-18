import React from "react";
import {  NavLink, useNavigate } from "react-router-dom";
import { useSignInWithEmailAndPassword } from "react-firebase-hooks/auth";
import auth from "../../firebase.init";
const Login = () => {
  const [signInWithEmailAndPassword, user, loading, error] =
    useSignInWithEmailAndPassword(auth);

  const navigate = useNavigate();

  let errorElement;
  if (error) {
    errorElement = <p className="text-danger">Error: {error?.message}</p>;
  }

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

  const handleLogin = async (event) => {
    event.preventDefault();
    const email = event.target.email.value;
    const password = event.target.password.value;

    console.log(email, password);
    await signInWithEmailAndPassword(email, password);
  };

  return (
    <div>
      <h1 className="fs-2 text-primary">Login</h1>
      <form onSubmit={handleLogin}>
        <div className="mb-3">
          <label className="form-label">Email address</label>
          <input
            required
            type="email"
            className="form-control"
            name="email"
            aria-describedby="emailHelp"
          />
        </div>
        <div className="mb-3">
          <label className="form-label">Password</label>
          <input
            required
            type="password"
            className="form-control"
            name="password"
          />
        </div>
        {errorElement}

        <input type="submit" className="btn btn-primary px-5" value="Login" />
      </form>
      <br />
      
      <span>
        Not registerd yet? <NavLink to="/signup">Sign UP</NavLink>
      </span>
    </div>
  );
};

export default Login;
