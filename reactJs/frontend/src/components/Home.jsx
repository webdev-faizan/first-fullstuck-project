import React, { memo } from "react";
import "../Stylesheet/Home.css";
// import Footer from './Footer'

const Home = () => {
  return (
    <>
      <section>
        <div className="home">
          <div className="main">
            <h1>We offer modern solutions for growing your business</h1>
            <p>
              We are team of talented designers making websites with Bootstrap
            </p>
            <div className="getstarthome">
              <button>
                {" "}
                Get Started ----- <span>&gt;</span>{" "}
              </button>
            </div>
          </div>
          <img src="./images/hero-img.png" alt="" />
        </div>
      </section>
    </>
  );
};

export default memo(Home);
