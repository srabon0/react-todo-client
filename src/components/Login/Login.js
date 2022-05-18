import React, { useRef } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useSignInWithEmailAndPassword } from "react-firebase-hooks/auth";
import auth from "../../firebase.init";
const Login = () => {
  const [signInWithEmailAndPassword, user, loading, error] =
    useSignInWithEmailAndPassword(auth);


  const emailRef = useRef("");
  const passwordRef = useRef("");
  const navigate = useNavigate();

  const navigateToSignUp = () => {
    navigate("/signup");
  };


  if (loading) {
    return (
      <div class="spinner-border" role="status">
        <span class="visually-hidden">Loading...</span>
      </div>
    );
  }

  if (user) {
    navigate("/");
  }
  const handleLogin = async (event) => {
    event.preventDefault();
    const email = emailRef.current.value;
    const password = passwordRef.current.value;


    console.log(email, password);
    await signInWithEmailAndPassword(email, password);
  };

  return (
    <div>
      <form onSubmit={handleLogin}>
        <div class="mb-3">
          <label class="form-label">Email address</label>
          <input
            type="email"
            ref={emailRef}
            class="form-control"
            name="email"
            aria-describedby="emailHelp"
          />
        </div>
        <div class="mb-3">
          <label class="form-label">Password</label>
          <input
            ref={passwordRef}
            type="password"
            class="form-control"
            name="password"
          />
        </div>
        <p>
          Not registered yet?{" "}
          <Link
            to="/signup"
            className="text-danger pe-auto text-decoration-none"
            onClick={navigateToSignUp}
          >
            Please Sign Up
          </Link>{" "}
        </p>

        <input type="submit" class="btn btn-primary" value="sign up" />
      </form>
    </div>
  );
};

export default Login;
