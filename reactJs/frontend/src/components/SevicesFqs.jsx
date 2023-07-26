import React, { memo, useState } from "react";
import faq from "../Api/faq";
const SevicesFqs = () => {
  const [data, setdata] = useState(null);

  const [close, show] = useState(false);

  function showanswer(a) {
    show(() => !close);

    setdata(a);
  }
  return (
    <>
      <div className="faqlist">
        {faq.map((ele, i) => {
          return (
            <div key={i} className="questionAnswer">
              <h2 style={{ color: data === i && close ? " #4154f1" : "" }}>
                {ele.question}
              </h2>
              <p
                style={{ color: data === i && close ? " #4154f1" : "" }}
                className={`arrow ${
                  data === i && close ? "rotate90" : "rotate160"
                }`}
                onClick={() => showanswer(i)}
              >
                {" "}
                {data === i && close ? "<" : ">"}{" "}
              </p>
              <p>{data === i && close ? ele.answer : ""}</p>
            </div>
          );
        })}
      </div>
    </>
  );
};

export default memo(SevicesFqs);
