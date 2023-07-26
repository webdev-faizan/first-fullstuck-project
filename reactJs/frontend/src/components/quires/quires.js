import { images } from "../../Server/http";

const fetchUserProphile = async () => {
  try {
    const userinfo = await images
      .get("/userinfo")
      .then((resp) => {
        return resp;
      })
      .catch((error) => {
        return error;
      });
  } catch (error) {
  }
};

export { fetchUserProphile };
