import React from "react";
import { NavLink, useNavigate } from "react-router-dom";
import auth from "../../firebase.init";
import { useCreateUserWithEmailAndPassword } from "react-firebase-hooks/auth";

const Signup = () => {
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
    const email = event.target.email.value;
    const password = event.target.password.value;
    console.log(email, password);

    await createUserWithEmailAndPassword(email, password);
  };
  return (
    <div>
      <h1 className="text-primary">Sign up</h1>
      <form onSubmit={handleSignup}>
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
        <br />

        <input type="submit" className="btn btn-primary px-5" value="Sign up" />
      </form>
      <br />
      <span>
        Already Have an account?{" "}
        <NavLink to="/login" className="text-primary">
          Login
        </NavLink>
      </span>
    </div>
  );
};

export default Signup;
