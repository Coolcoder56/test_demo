import React from "react";
import { Link } from "react-router-dom";

function NotFoundPage() {
  return (
    <div>
      <h1 style={{ textAlign: "center" }}>
        This is still is development thanks for visiting!!!
      </h1>
      <p style={{ textAlign: "center" }}>
        <Link to="/">
          <button className="btn" style={{ borderBlockColor: "black" }}>
            Go to Home
          </button>{" "}
        </Link>
        <lottie-player
          src="https://assets1.lottiefiles.com/packages/lf20_hpx8arg2.json"
          background="transparent"
          speed="1"
          loop
          autoplay
        ></lottie-player>
      </p>
    </div>
  );
}

export default NotFoundPage;
