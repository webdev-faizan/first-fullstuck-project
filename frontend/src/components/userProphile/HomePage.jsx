import React from "react";

const HomePage = () => {
  return (
    <div>
      <div>
        {/* post info */}
        <div className="d-flex align-items-center ">
          <img
            src="./images/blog-1.jpg"
            className="rounded-circle"
            style={{ width: "60px", height: "60px" }}
            alt=""
          />
          <div>date</div>
        </div>
      </div>
      <p></p>
      <img src="./images/blog-1.jpg" alt="" />

      {/* like and commetn info */}
      <div>
        <span>3k</span>
        <span>18 comment</span>
      </div>
      <div>
        <span>like</span>
        <span>comment</span>
        <span>share</span>
      </div>
    </div>
  );
};

export default HomePage;
