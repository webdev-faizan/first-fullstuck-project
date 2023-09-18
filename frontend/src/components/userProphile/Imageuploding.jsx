import React, { useState } from "react";
import { memo } from "react";

const Imageuploding = ({
  image,
  name,
  size,
  uploadProgress,
  uploadSpeed,
  cancel,
}) => {
  const [show, close] = useState(false);
  const [imageReal, setRealimage] = useState();

  const reader = new FileReader();
  reader.onload = () => {
    setRealimage(reader.result);
  };
  if (image) {
    reader.readAsDataURL(image);
  }
  return (
    <div
      className={`bg-success m-auto p-3 rounded-5 position-relative ${
        show ? "d-none" : "d-block"
      }`}
      style={{ height: "130px", width: "40%" }}
    >
      <div className="row">
        <div className="col-3" style={{ marginTop: "10px" }}>
          {" "}
          <img
            src={imageReal}
            className="img-fluid rounded-circle"
            style={{ width: "70px", height: "70px", objectFit: "cover" }}
            alt="lodding error"
          />{" "}
          <p className="ms-4 mt-3 fs-4 ">
            {size} {size > 1024 ? "mb" : "kb"}{" "}
          </p>
        </div>
        <div className="col-8  " style={{ marginTop: "26px" }}>
          <div className="row">
            <div className="col-12">
              {/* uploading speed and icon */}
              <div
                className="position-absolute "
                style={{ top: "35px", left: "57%" }}
              >
                <spna className="ms-3 fs-4 text-white">
                  {uploadSpeed}
                  {uploadSpeed > 1024 ? " MB/ps" : " kb/ps"}
                </spna>
              </div>
              <div className="row">
                <p className="col-11 fs-4">{name}</p>
                <span className="col-1 fs-4">{uploadProgress}%</span>
              </div>
            </div>

            {/* progress bar */}
            <div className=" col-12 position-relative ">
              <p
                className="bg-white position-absolute rounded-3 w-100 "
                style={{ height: "5px", zIndex: "2" }}
              >
                {" "}
              </p>
              <p
                className="bg-warning rounded-3 position-absolute"
                style={{
                  height: "5px",
                  zIndex: "7",
                  width: `${uploadProgress}%`,
                }}
              ></p>
            </div>
          </div>
        </div>
      </div>
      <div
        className="d-flex justify-content-end"
        style={{ marginTop: "-39px" }}
      >
        {" "}
        <button className="btn btn-primary me-4" onClick={() => close(!show)}>
          close
        </button>
        <button className="btn btn-danger me-5" onClick={() => cancel()}>
          cancel
        </button>
      </div>
    </div>
  );
};

export default memo(Imageuploding);
