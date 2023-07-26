function uploadimg() {
  const cloudinary = require("cloudinary").v2;
  cloudinary.config({
    cloud_name: "dstrjnhdr",
    api_key: "935686568924467",
    api_secret: "2LyM6BdJ-L4kfabsmpNHMs5SBE0",
  });
  // const option = {};
  const f = Date.now();
  console.log(f);
  cloudinary.uploader
    .upload("uploadimg.png", {
      // overwrite: true,
      // folder: "images/",
      public_id: `faizan`,
      // public_id_prefix: "images",

      unique_filename: true,

      public_id: `image/${f}`,

      // use_filename: "faizan",
    })
    .then((resp) => {
      console.log(resp, "resp");
    })
    .catch((e) => {
      console.log(e, "e");
    });
}
uploadimg();
