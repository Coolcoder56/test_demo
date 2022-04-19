import React, { useState } from "react";
import { Link } from "react-router-dom";
import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";
import Loader from "../Components/Loader";
import { toast } from "react-toastify";
import 'C:/Users/gupta/3D Objects/College 8th sem project/efire/src/Pages/Title.css'
function Title() {
  return (
    <div className="Title">
      <h1 ><i>LitOnline</i></h1>
    </div>
  );
}

function Registrationpage() {
  const [email, setEmail] = useState(" ");
  const [password, setPassword] = useState(" ");
  const [cpassword, setCPassword] = useState(" ");
  const auth = getAuth();
  const [loading, setLoading] = useState(false);
  const register = async() => {
    try {
      setLoading(true);
      const result = await createUserWithEmailAndPassword(auth, email, password);
      console.log(result);
      setLoading(false);
      toast.success('registration successful');
    } catch (error) {
      console.log(error);
      toast.error('Registration failed');
      setLoading(false);
    }
  };
  return (
    <div className="register-parent">
      {loading && <Loader />}
      <Title/>
      <div className="row justify-content-center">
        <div className="col-md-5">
          <lottie-player
            src="https://assets10.lottiefiles.com/packages/lf20_umqaz2yv.json"
            background="transparent"
            speed="1"
            loop
            autoplay
          ></lottie-player>
        </div>
        <div className="col-md-4">
          <div className="register-form">
            <h2>Register</h2>
            <hr />

            <input
              type="text"
              className="form-control "
              placeholder="Email"
              value={email.email}
              onChange={(e) => setEmail(e.target.value)}
            />
            <input
              type="text"
              className="form-control "
              placeholder="Password"
              value={password.password}
              onChange={(e) => {
                setPassword(e.target.value);
              }}
            />
            <input
              type="text"
              className="form-control "
              placeholder="Confirm password"
              value={cpassword.cpassword}
              onChange={(e) => {
                setCPassword(e.target.value);
              }}
            />
            <button className="btn btn-primary btn-block" onClick={register}>
              Register
            </button>
            <hr />
            <Link to="/login">Click here to Login</Link>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Registrationpage;
