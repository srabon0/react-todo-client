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
      <div class="spinner-border" role="status">
        <span class="visually-hidden">Loading...</span>
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
        <div class="mb-3">
          <label class="form-label">Email address</label>
          <input
            type="email"
            class="form-control"
            name="email"
            ref={emailRef}
            aria-describedby="emailHelp"
          />
        </div>
        <div class="mb-3">
          <label class="form-label">Password</label>
          <input   ref={passwordRef} type="password" class="form-control" name="password" />
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

        <input type="submit" class="btn btn-primary" value="sign up" />
      </form>
    </div>
  );
};

export default Signup;
