import React, { memo } from "react";
import Servicescard from "./Servicescard";
import SevicesFqs from "./SevicesFqs";

const Services = () => (
  <div>
    <Servicescard />

    <div className="pricingcards">
      {/* frist pricing card */}

      <div className="pricingDetail">
        <h2>Free Plan</h2>
        <p>
          {" "}
          <sup>$</sup>
          <sub>0</sub>
          <span>/mo</span>{" "}
        </p>
        <img src="./images/pricing-free.png" alt=""></img>
        <p>Aida dere</p>
        <p>Nec feugiat nisl</p>
        <p>Nulla at volutpat dola</p>
        <p
          style={{
            textDecoration: "line-through",
            fontWeight: "lighter",
            textDecorationColor: "#bababa",
          }}
        >
          Pharetra massa
        </p>
        <p
          style={{
            textDecoration: "line-through",
            fontWeight: "lighter",
            textDecorationColor: "#bababa",
          }}
        >
          Massa ultricies mi
        </p>
        <button>Buy Now</button>
      </div>

      {/* second pricing card */}

      <div
        className="pricingDetail"
        style={{ position: "relative", overflow: "hidden" }}
      >
        <h2>Free Plan</h2>
        <p>
          {" "}
          <sup>$</sup>
          <sub>19</sub>
          <span>/mo</span>{" "}
        </p>
        <h3 id="feature">Featured</h3>
        <img src="./images/pricing-starter.png" alt=""></img>
        <p>Aida dere</p>
        <p>Nec feugiat nisl</p>
        <p>Nulla at volutpat dola</p>
        <p>Pharetra massa</p>
        <p
          style={{
            textDecoration: "line-through",
            fontWeight: "lighter",
            textDecorationColor: "#bababa",
          }}
        >
          Massa ultricies mi
        </p>
        <button>Buy Now</button>
      </div>

      {/* third card */}

      <div className="pricingDetail">
        <h2>Free Plan</h2>
        <p>
          {" "}
          <sup>$</sup>
          <sub>29</sub>
          <span>/mo</span>{" "}
        </p>
        <img src="./images/pricing-business.png" alt=""></img>
        <p>Aida dere</p>
        <p>Nec feugiat nisl</p>
        <p>Nulla at volutpat dola</p>
        <p>Pharetra massa</p>
        <p>Massa ultricies mi</p>
        <button>Buy Now</button>
      </div>

      {/* four card */}

      <div className="pricingDetail">
        <h2>Free Plan</h2>
        <p>
          {" "}
          <sup>$</sup>
          <sub>49</sub>
          <span>/mo</span>{" "}
        </p>
        <img src="./images/pricing-ultimate.png" alt=""></img>
        <p>Aida dere</p>
        <p>Nec feugiat nisl</p>
        <p>Nulla at volutpat dola</p>
        <p>Pharetra massa</p>
        <p>Massa ultricies mi</p>
        <button>Buy Now</button>
      </div>
    </div>

    {/* frequently ask question */}

    <div className="questionheading">
      <h3>F.A.Q</h3>
      <h2>Frequently Asked Questions</h2>
    </div>

    <SevicesFqs />
  </div>
);

export default memo(Services);
