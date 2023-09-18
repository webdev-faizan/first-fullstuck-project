import React, { memo, useEffect, useState } from "react";
import testmonialsdata from "../Api/Testimonialsdata";

const Testimonialscard = () => {
  const [next, setnext] = useState(0);

  const second = 3;
  const third = testmonialsdata.length - 1;

  const findme = (a) => {
    setnext(+a);
  };

  useEffect(() => {
    const changecard = setInterval(cards, 2000);

    function cards() {
      if (next === testmonialsdata.length - 1) {
        setnext(0);
      } else {
        setnext(next + 1);
      }
    }
    return () => {
      clearInterval(changecard);
    };
  }, [next]);

  return (
    <>
      <div className="testmonialscards">
        <div className="trestmonialscard">
          <p>{testmonialsdata[second].introduction}</p>
          <img src={testmonialsdata[second].src} alt="" />
          <h2>{testmonialsdata[second].name}</h2>
          <p>{testmonialsdata[second].profession}</p>
        </div>

        <div className="trestmonialscard">
          <p>{testmonialsdata[next].introduction}</p>
          <img src={testmonialsdata[next].src} alt="" />
          <h2>{testmonialsdata[next].name}</h2>
          <p>{testmonialsdata[next].profession}</p>
        </div>

        <div className="trestmonialscard">
          <p>{testmonialsdata[third].introduction}</p>
          <img src={testmonialsdata[third].src} alt="" />
          <h2>{testmonialsdata[third].name}</h2>
          <p>{testmonialsdata[third].profession}</p>
        </div>
      </div>

      <div className="carasolcircle">
        <div
          style={{ backgroundColor: next === 0 ? "#4154f1" : "white" }}
          onClick={() => findme("0")}
        ></div>
        <div
          style={{ backgroundColor: next === 1 ? "#4154f1" : "white" }}
          onClick={() => findme("1")}
        ></div>
        <div
          style={{ backgroundColor: next === 2 ? "#4154f1" : "white" }}
          onClick={() => findme("2")}
        ></div>
        <div
          style={{ backgroundColor: next === 3 ? "#4154f1" : "white" }}
          onClick={() => findme("3")}
        ></div>
        <div
          style={{ backgroundColor: next === 4 ? "#4154f1" : "white" }}
          onClick={() => findme("4")}
        ></div>
        <div
          style={{ backgroundColor: next === 5 ? "#4154f1" : "white" }}
          onClick={() => findme("5")}
        ></div>
      </div>
    </>
  );
};

export default memo(Testimonialscard);
