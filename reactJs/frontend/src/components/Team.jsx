import React, { memo, useEffect, useState } from "react";
import TeamData from "../Api/TeamData";
import "../Stylesheet/Team.css";
const client = [
  "./images/client-1.png",
  "./images/client-2.png",
  "./images/client-3.png",
  "./images/client-4.png",
  "./images/client-5.png",
  "./images/client-5.png",
  "./images/client-6.png",
  "./images/client-7.png",
  "./images/client-8.png",
];

const Team = () => {
  const [next, setnext] = useState(0);

  const findme = (a) => {
    setnext(a);
  };

  useEffect(() => {
    const clearvalue = setInterval(change, 1000);

    function change() {
      if (next === client.length - 1) {
        setnext(0);
      } else {
        setnext(next + 1);
      }
    }

    return () => clearInterval(clearvalue);
  }, [next]);
  return (
    <>
      <div className="Teamheading">
        <h3>TEAM</h3>
        <h2>Our hard working team</h2>
      </div>

      <div className="teamdeatail">
        {TeamData.map((e, i) => {
          return (
            <div className="individualDetail" key={i}>
              <img src={e.src} alt="" />
              <h2>{e.name} hi</h2>
              <h3>{e.profession}</h3>
              <p>{e.description}</p>
            </div>
          );
        })}
      </div>

      {/* our client
       */}

      <div className="clientheading">
        <h3>OUR CLIENTS</h3>
        <h2>Temporibus omnis officia</h2>
      </div>

      <div className="clients">
        <img src="./images/client-1.png" alt="" />
        <img src="./images/client-2.png" alt="" />
        <img src="./images/client-3.png" alt="" />
        <img src="./images/client-4.png" alt="" />
        <img src={client[next]} alt="" />
        <img src="./images/client-5.png" alt="" />
        <img src="./images/client-6.png" alt="" />
        <img src="./images/client-7.png" alt="" />
        <img src="./images/client-8.png" alt="" />
      </div>
      <div className="clientcircle">
        <div
          onClick={() => findme(0)}
          style={{ backgroundColor: next === 0 ? "#0f54cc" : "" }}
        ></div>
        <div
          onClick={() => findme(1)}
          style={{ backgroundColor: next === 1 ? "#0f54cc" : "" }}
        ></div>
        <div
          onClick={() => findme(2)}
          style={{ backgroundColor: next === 2 ? "#0f54cc" : "" }}
        ></div>
        <div
          onClick={() => findme(3)}
          style={{ backgroundColor: next === 3 ? "#0f54cc" : "" }}
        ></div>
        <div
          onClick={() => findme(4)}
          style={{ backgroundColor: next === 4 ? "#0f54cc" : "" }}
        ></div>
        <div
          onClick={() => findme(5)}
          style={{ backgroundColor: next === 5 ? "#0f54cc" : "" }}
        ></div>
        <div
          onClick={() => findme(6)}
          style={{ backgroundColor: next === 6 ? "#0f54cc" : "" }}
        ></div>
        <div
          onClick={() => findme(7)}
          style={{ backgroundColor: next === 7 ? "#0f54cc" : "" }}
        ></div>
        <div
          onClick={() => findme(8)}
          style={{ backgroundColor: next === 8 ? "#0f54cc" : "" }}
        ></div>
      </div>
    </>
  );
};

export default memo(Team);
