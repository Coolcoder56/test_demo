import React, { useState } from "react";
import { Link } from "react-router-dom";
import { getAuth, signInWithEmailAndPassword } from "firebase/auth";
import { toast } from "react-toastify";
import Loader from "../Components/Loader";
import 'C:/Users/gupta/3D Objects/College 8th sem project/efire/src/Pages/Title.css'

function Title() {
  return (
    <div className="Title">
      <h1>
        <i>LitOnline</i>
      </h1>
    </div>
  );
}

function Loginpage() {
  const [email, setEmail] = useState(" ");
  const [password, setPassword] = useState(" ");
  const auth = getAuth();
  const [loading, setLoading] = useState(false);

  const login = async () => {
    try {
      setLoading(true);
      const result = await signInWithEmailAndPassword(auth, email, password);
      localStorage.setItem("CurrentUser", JSON.stringify(result.user));
      setLoading(false);
      toast.success("Login successful");
      window.location.href = "/";
    } catch (error) {
      console.log(error);
      toast.error("Login failed");
      setLoading(false);
    }
  };

  return (
    <div className="login-parent">
      {loading && <Loader />}
      <Title />
      <div className="row justify-content-center">
        <div className="col-md-4">
          <div className="login-form">
            <h2>login</h2>
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

            <button className="btn btn-primary btn-block" onClick={login}>
              login
            </button>
            <hr />
            <Link to="/register">Click here to register</Link>
          </div>
        </div>
        <div className="col-md-5">
          <lottie-player
            src="https://assets2.lottiefiles.com/private_files/lf30_ohemd1k3.json"
            background="transparent"
            speed="1"
           
            loop
            
            autoplay
          ></lottie-player>
         
        </div>
      </div>
    </div>
  );
}

export default Loginpage;
