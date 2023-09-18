import React, { memo, useState } from "react";
import "../Stylesheet/Portfolio.css";
import filtergallery from "../Api/Filtergallery";
import Testimonialscard from "./Testimonialscard";

const Portifolio = () => {
  const [filterphoto, setfilterphoto] = useState(filtergallery);
  const [style, setstyle] = useState("all");
  const [allbutton, allstyle] = useState({ border: "2px solid #4154f1" });

  const All = (a) => {
    let va = filtergallery.filter((ele) => {
      return ele.catageray !== a;
    });
    allstyle({ border: "1px solid #4154f1" });
    setfilterphoto(va);
    setstyle("f");
  };

  const App = (a) => {
    let va = filtergallery.filter((ele) => {
      return ele.catageray === a;
    });
    setfilterphoto(va);
    allstyle({ border: "none" });
    setstyle("app");
  };
  const Card = (a) => {
    let va = filtergallery.filter((ele) => {
      return ele.catageray === a;
    });
    setfilterphoto(va);
    allstyle({ border: "none" });
    setstyle("card");
  };

  const Web = (a) => {
    let va = filtergallery.filter((ele) => {
      return ele.catageray === a;
    });
    setfilterphoto(va);
    allstyle({ border: "none" });
    setstyle("web");
  };

  return (
    <>
      <div className="portifolioheading">
        <h3>PORTFOLIO</h3>
        <h2>Check our latest work</h2>
      </div>

      <div className="filterbutton">
        <button style={allbutton} onClick={() => All("all")}>
          All
        </button>
        <button
          style={{ border: style === "app" ? "1px solid #4154f1" : "none" }}
          onClick={() => App("app")}
        >
          App
        </button>
        <button
          style={{ border: style === "card" ? "1px solid #4154f1" : "none" }}
          onClick={() => Card("card")}
        >
          Card
        </button>
        <button
          style={{ border: style === "web" ? "1px solid #4154f1" : "none" }}
          onClick={() => Web("web")}
        >
          Web
        </button>
      </div>

      <div className="gallery">
        {filterphoto.map((ele, ind) => {
          return (
            <div className="allimages" key={ind}>
              <img src={ele.pic} alt="" />
              <div className="hover">
                <h2>{ele.title}</h2>
                <h3>{ele.subtitle}</h3>
                <div className="circle">
                  <div></div>
                  <div></div>
                </div>
              </div>{" "}
            </div>
          );
        })}
      </div>

      {/* TESTIMONIALS */}

      <div className="testmonialsheading">
        <h3>TESTIMONIALS</h3>
        <h2>What they are saying about us</h2>
      </div>

      <Testimonialscard />
    </>
  );
};

export default memo(Portifolio);
