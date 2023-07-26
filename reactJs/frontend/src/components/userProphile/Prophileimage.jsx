import React, { memo, useEffect, useState } from "react";
import { useMutation, useQuery } from "react-query";
import { images } from "../../Server/http";
import Imageuploding from "./Imageuploding";

const Prophileimage = () => {
  const [image, setImage] = useState(null);
  const [name, setName] = useState(null);
  const [size, setSize] = useState(null);
  const [uploadProgress, setUploadProgress] = useState(null);
  const [uploadSpeed, setUploadSpeed] = useState(null);
  const [uploadingInfo, setUploadingInfo] = useState(false);
  const controller = new AbortController();

  async function fetchUserProphile() {
    const userinfo = await images.get("/userinfo");
    return userinfo;
  }
  const { data, error, isLoading, status, refetch } = useQuery(
    "useprophile",
    fetchUserProphile,
    {
      onSuccess: () => {
        fetchProphile(data.data.userProphile.filename);
      },
    }
  );

  const fetchProphile = async (data) => {
    const Data = await images.get(`profileimage/${data}`);

    return Data;
  };

  const { data: userPic } = useQuery("userpic", () =>
    fetchProphile(data.data.userProphile.filename)
  );
  const sendProphileImage = useMutation(
    (Formdata) => {
      try {
        images
          .post("/profileimage", Formdata, {
            signal: controller.signal,
            //  uploading progress
            onUploadProgress: function ({ total, loaded, rate }) {
              const perCentage = Math.floor((loaded * 100) / total);
              const uploadingSpeed = Math.floor(+rate) || 1024;
              const uploadingSpeedKB = uploadingSpeed / 1024;

              const UploadSpeed =
                uploadingSpeedKB > 1024
                  ? uploadingSpeedKB / 1024 + " MB"
                  : uploadingSpeedKB + " kb";
              setUploadProgress(perCentage);

              setUploadSpeed(UploadSpeed);
            },
          })
          .then((resp) => {
            console.log(resp);

            setTimeout(() => {
              setUploadingInfo(false);
              refetch();
            }, 3000);
          })
          .catch((e) => {
            setTimeout(() => {
              setUploadingInfo(false);
            }, 3000);

            console.log(e);
          });
      } catch (error) {
        setTimeout(() => {
          setUploadingInfo(false);
        }, 3000);
      }
    },
    {
      onSuccess: () => {
        refetch();
      },
    }
  );

  const uploadProphileImage = (e) => {
    const image = e.target.files[0];
    setImage(image);
    const size = Math.round(Number(image.size) / 1024);
    const name = image.name;
    const fileExtention = image.type.toLowerCase();
    const Name =
      name.length > 8
        ? name.slice(0, 7) + "..." + fileExtention.split("/").pop()
        : name;

    if (fileExtention != "image/jpeg" && fileExtention != "image/png") {
      alert("is not a image plase select the valid image");

      return;
    } else {
      setUploadingInfo(true);
      const Size = size < 1024 ? `${size / 1024}MB` : `${size + "kb"}`;
      setName(Name);
      setSize(size);
      const Formdata = new FormData();
      Formdata.append("prophileimage", image);
      sendProphileImage.mutate(Formdata);
    }
  };

  function cancel() {
    controller.abort();
  }

  return (
    <>
      {" "}
      <div
        className=" position-absolute w-100 start-0 top-0 "
        style={{ zIndex: "34897" }}
      >
        {uploadingInfo ? (
          <Imageuploding
            image={image}
            name={name}
            size={size}
            uploadProgress={uploadProgress}
            uploadSpeed={uploadProgress}
            cancel={cancel}
          />
        ) : (
          ""
        )}
      </div>
      <div>
        <div
          className="row-cols-1 faizan prophileImg  "
          style={{ marginTop: "-5rem" }}
        >
          <div className="col-12 position-relative    ">
            <div>
              <img
                // src={`data:image;base64,${userprofile}`}
                src={`data:image;base64,${userPic?.data?.profileImage}`}
                className="img rounded-circle img-fluid  border border-5 border-dark  "
                style={{
                  objectFit: "cover",
                  height: "25rem",
                  width: "25rem",
                  marginLeft: "7rem",
                }}
                alt="./images/blog-1.jpg"
              />
              <p
                id="username"
                className="text-dark  px-5 py-3 ms-5 bg-warning rounded-3 font-bold position-absolute text-center "
                style={{
                  fontSize: "18px",
                  width: "150px",
                  bottom: "-8rem",
                  left: "8rem",
                }}
              >
                {data?.data?.fullname}
              </p>
            </div>

            <div
              className="text-danger position-absolute  px-2   py-2 d-flex  align-items-center "
              style={{
                bottom: "3.3rem",
                left: "26.7rem",
              }}
            >
              <input
                type="file"
                name="myfile"
                onChange={uploadProphileImage}
                className=" position-absolute opacity-0 "
                style={{ left: "4px", zIndex: "20", width: "40px" }}
              />

              <div className="bg-success p-3 rounded-circle">
                <img
                  src="./images/upload.png"
                  alt="lodding error"
                  style={{ width: "3rem", mixBlendMode: "multiply" }}
                />
              </div>
            </div>
          </div>
        </div>
      </div>
      <br />
    </>
  );
};

export default memo(Prophileimage);
