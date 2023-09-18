import React, { useEffect, useState } from "react";
import { images } from "../../Server/http";
import { useMutation, useQuery } from "react-query";
import Imageuploding from "./Imageuploding";
const Bgimage = () => {
  // here other
  const [image, setImage] = useState(null);
  const [name, setName] = useState(null);
  const [size, setSize] = useState(null);
  const [uploadProgress, setUploadProgress] = useState(null);
  const [uploadSpeed, setUploadSpeed] = useState(null);
  const [uploadingInfo, setUploadingInfo] = useState(false);
  const controller = new AbortController();

  // send image on the server side

  const sendBgimageMutation = useMutation((formData) => {
    try {
      images
        .post("/prophilebgimage", formData, {
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
          setTimeout(() => {
            setUploadingInfo(false);
          }, 3000);
        })
        .catch((e) => {
          setTimeout(() => {
            setUploadingInfo(false);
          }, 3000);
        });
    } catch {}
  });

  const postBgImage = (e) => {
    const image = e.target.files[0];

    const fileExtention = image.type.toLowerCase();

    if (
      fileExtention != "image/png" &&
      fileExtention !== "image/jpg" &&
      fileExtention !== "image/jpeg"
    ) {
      alert("enter valid image");
      return;
    } else {
      const size = Math.round(Number(image.size) / 1024);
      const name = image.name;
      const Name =
        name.length > 8
          ? name.slice(0, 7) + "..." + fileExtention.split("/").pop()
          : name;
      setImage(image);
      setName(Name);
      setSize(size);
      setUploadingInfo(true);
      const formData = new FormData();
      formData.append("image", image);
      sendBgimageMutation.mutate(formData);
    }
  };

  async function fetchUserProphile() {
    const { data } = await images.get("/userinfo");
    return data;
  }
  const { data, error, isLoading, status, refetch } = useQuery(
    "bgimage",
    fetchUserProphile,
    {
      onSuccess: () => {
        fetchProphile(data?.bgImage?.filename);
      },
    }
  );

  const fetchProphile = async (filename) => {
    const { data } = await images.get(`bgimage/${filename}`);
    return data;
  };

  const { data: BGimage } = useQuery("bgimages", () =>
    fetchProphile(data?.bgImage?.filename)
  );

  function cancel() {
    controller.abort();
  }

  return (
    <>
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
          " "
        )}
      </div>
      <div className="row-cols-1 faizan mt-5 p">
        <div className="col-12 position-relative bgimage   ">
          <img
            src={`data:image;base64,${BGimage?.bgimage}`}
            className="img w-100 "
            style={{ objectFit: "cover", height: "40vh" }}
          />

          <div
            className="text-danger position-absolute bg-white px-2 rounded-2 py-2 d-flex  align-items-center imageSelection"
            style={{ bottom: "2rem", right: "4rem" }}
          >
            <input
              type="file"
              name="myfile"
              onChange={postBgImage}
              // onChange={uploadProphileImages}
              className=" position-absolute opacity-0 "
              style={{ left: "4px", zIndex: "20", width: "40px" }}
            />
            <img
              src="./images/upload.png"
              style={{ width: "3rem", mixBlendMode: "multiply" }}
            />
            <span className="fs-3 text-dark fw-bolder  ms-4 ">
              {" "}
              Edit cover photo
            </span>
          </div>
        </div>
      </div>
    </>
  );
};

export default Bgimage;
