import React from "react";
import "../Stylesheet/Blogs.css";

const Blogs = () => {
  return (
    <>
      <div className="blogsheading">
        <h3>BLOG</h3>
        <h2>Recent posts form our Blog</h2>
      </div>

      <div className="blogscards">
        <div className="blogs">
          <img src="./images/blog-1.jpg" alt="" />
          <h3>Tue, September 15</h3>
          <h2>
            Eum ad dolor et. Autem aut fugiat debitis voluptatem consequuntur
            sit
          </h2>
          <span>Read More</span>
        </div>

        <div className="blogs">
          <img src="./images/blog-2.jpg" alt="" />
          <h3>Fri, August 28</h3>
          <h2>Et repellendus molestiae qui est sed omnis voluptates magnam</h2>
          <span>Read More</span>
        </div>

        <div className="blogs">
          <img src="./images/blog-3.jpg" alt="" />
          <h3>Mon, July 11</h3>
          <h2>Quia assumenda est et veritatis aut quae</h2>
          <span>Read More</span>
        </div>
      </div>
    </>
  );
};

export default Blogs;
