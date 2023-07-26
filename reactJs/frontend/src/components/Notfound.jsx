import React, { memo } from "react";
import "../Stylesheet/notfound.css";

const Notfound = () => {
  return (
    <div className="notfound">
      <h2>404</h2>
      <p>not found</p>
    </div>
  );
};

export default memo(Notfound);
