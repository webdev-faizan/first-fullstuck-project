import React, { memo, useState } from "react";
import "../Stylesheet/Services.css";

const Servicescard = () => {
  const [hoverstate, sethover] = useState(1);
  function hover(a) {
    sethover(+a);
  }

  return (
    <>
      <section>
        <div className="servicesheader">
          <h2>SERVICES</h2>
          <p>Veritatis et dolores facere numquam et praesentium</p>
        </div>

        <div className="servicesBoxes">
          <div
            className="servicesBox"
            onMouseOver={() => hover("1")}
            onMouseLeave={() => hover("0")}
            style={{
              border: "none",
              borderBottom: "4px solid rgb(45, 182, 250)",
              backgroundColor: hoverstate === 1 ? "rgb(45, 182, 250)" : "white",
            }}
          >
            <div
              style={{
                background:
                  hoverstate === 1 ? "white " : "rgba(45, 182, 250, 0.308)",
                width: "9rem",
                height: "10.4rem",
                borderRadius: "1rem",
                padding: "4rem",
              }}
            ></div>
            <h2 style={{ color: hoverstate === 1 ? "white" : "" }}>
              Nesciunt Mete
            </h2>
            <p style={{ color: hoverstate === 1 ? "white" : "" }}>
              Provident nihil minus qui consequatur non omnis maiores. Eos
              accusantium minus dolores iure perferendis tempore et consequatur.
            </p>
            <a
              href="/"
              style={{
                fontSize: "2rem",
                fontWeight: "bold",
                textdecoration: "none",
                color: hoverstate === 1 ? "white" : "rgb(45, 182, 250)",
              }}
            >
              Read More
            </a>
          </div>

          {/* box two */}

          <div
            className="servicesBox"
            onMouseOver={() => hover("2")}
            onMouseLeave={() => hover("0")}
            style={{
              border: "none",
              borderBottom: "4px solid rgb(246, 140, 9)",
              backgroundColor: hoverstate === 2 ? "rgb(246, 140, 9)" : "white",
            }}
          >
            <div
              style={{
                background: hoverstate === 2 ? "white " : " rgb(253, 227, 196)",
                width: "9rem",
                height: "10.4rem",
                borderRadius: "1rem",
                padding: "4rem",
              }}
            ></div>
            <h2 style={{ color: hoverstate === 2 ? "white" : "" }}>
              {" "}
              Nesciunt Mete
            </h2>
            <p style={{ color: hoverstate === 2 ? "white" : "" }}>
              Provident nihil minus qui consequatur non omnis maiores. Eos
              accusantium minus dolores iure perferendis tempore et consequatur.
            </p>
            <a
              href="/"
              style={{
                fontSize: "2rem",
                fontWeight: "bold",
                textdecoration: "none",
                color: hoverstate === 2 ? "white" : "rgb(246, 140, 9)",
              }}
            >
              Read More
            </a>
          </div>

          {/* box three */}

          <div
            className="servicesBox"
            onMouseOver={() => hover("3")}
            onMouseLeave={() => hover("0")}
            style={{
              border: "none",
              borderBottom: "4px solid rgb(8, 218, 78)",
              backgroundColor: hoverstate === 3 ? "rgb(8, 218, 78)" : "white",
            }}
          >
            <div
              style={{
                background:
                  hoverstate === 3 ? "white " : "rgb(8, 218, 78, 0.2) ",
                width: "9rem",
                height: "10.4rem",
                borderRadius: "1rem",
                padding: "4rem",
              }}
            ></div>
            <h2 style={{ color: hoverstate === 3 ? "white" : "" }}>
              {" "}
              Nesciunt Mete
            </h2>
            <p style={{ color: hoverstate === 3 ? "white" : "" }}>
              Provident nihil minus qui consequatur non omnis maiores. Eos
              accusantium minus dolores iure perferendis tempore et consequatur.
            </p>
            <a
              href="/"
              style={{
                fontSize: "2rem",
                fontWeight: "bold",
                textdecoration: "none",
                color: hoverstate === 3 ? "white" : "rgb(8, 218, 78)",
              }}
            >
              Read More
            </a>
          </div>

          {/* box four */}

          <div
            className="servicesBox"
            onMouseOver={() => hover("4")}
            onMouseLeave={() => hover("0")}
            style={{
              border: "none",
              borderBottom: "4px solid rgb(233, 34, 44)",
              backgroundColor: hoverstate === 4 ? "rgb(233, 34, 44)" : "white",
            }}
          >
            <div
              style={{
                background:
                  hoverstate === 4 ? "white " : "rgb(233, 34, 44, 0.2) ",
                width: "9rem",
                height: "10.4rem",
                borderRadius: "1rem",
                padding: "4rem",
              }}
            ></div>
            <h2 style={{ color: hoverstate === 4 ? "white" : "" }}>
              {" "}
              Nesciunt Mete
            </h2>
            <p style={{ color: hoverstate === 4 ? "white" : "" }}>
              Provident nihil minus qui consequatur non omnis maiores. Eos
              accusantium minus dolores iure perferendis tempore et consequatur.
            </p>
            <a
              href="/"
              style={{
                fontSize: "2rem",
                fontWeight: "bold",
                textdecoration: "none",
                color: hoverstate === 4 ? "white" : "rgb(233, 34, 44)",
              }}
            >
              Read More
            </a>
          </div>

          {/* box five */}

          <div
            className="servicesBox"
            onMouseOver={() => hover("5")}
            onMouseLeave={() => hover("0")}
            style={{
              border: "none",
              borderBottom: "4px solid rgb(181, 14, 223)",
              backgroundColor: hoverstate === 5 ? "rgb(181, 14, 223)" : "white",
            }}
          >
            <div
              style={{
                background:
                  hoverstate === 5 ? "white " : "rgb(181, 14, 223, 0.2) ",
                width: "9rem",
                height: "10.4rem",
                borderRadius: "1rem",
                padding: "4rem",
              }}
            ></div>
            <h2 style={{ color: hoverstate === 5 ? "white" : "" }}>
              {" "}
              Nesciunt Mete
            </h2>
            <p style={{ color: hoverstate === 5 ? "white" : "" }}>
              Provident nihil minus qui consequatur non omnis maiores. Eos
              accusantium minus dolores iure perferendis tempore et consequatur.
            </p>
            <a
              href="/"
              style={{
                fontSize: "2rem",
                fontWeight: "bold",
                textdecoration: "none",
                color: hoverstate === 5 ? "white" : "rgb(181, 14, 223)",
              }}
            >
              Read More
            </a>
          </div>

          {/* box six */}

          <div
            className="servicesBox"
            onMouseOver={() => hover("6")}
            onMouseLeave={() => hover("0")}
            style={{
              border: "none",
              borderBottom: "4px solid rgb(245, 31, 156)",
              backgroundColor: hoverstate === 6 ? "rgb(245, 31, 156)" : "white",
            }}
          >
            <div
              style={{
                background:
                  hoverstate === 6 ? "white " : "rgb(245, 31, 156, 0.3) ",
                width: "9rem",
                height: "10.4rem",
                borderRadius: "1rem",
                padding: "4rem",
              }}
            ></div>
            <h2 style={{ color: hoverstate === 6 ? "white" : "" }}>
              {" "}
              Nesciunt Mete
            </h2>
            <p style={{ color: hoverstate === 6 ? "white" : "" }}>
              Provident nihil minus qui consequatur non omnis maiores. Eos
              accusantium minus dolores iure perferendis tempore et consequatur.
            </p>
            <a
              href="/"
              style={{
                fontSize: "2rem",
                fontWeight: "bold",
                textdecoration: "none",
                color: hoverstate === 6 ? "white" : "rgb(245, 31, 156)",
              }}
            >
              Read More
            </a>
          </div>
        </div>
      </section>
    </>
  );
};

export default memo(Servicescard);
