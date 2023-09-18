const express = require("express");
const app = express();
const bodyParser = require("body-parser");
const cors = require("cors");
const Routes = require("./Routes/Routes");
const cookieparser = require("cookie-parser");
const port = process.env.PORT || 8000;
const connectDB = require("./connection");
const singupModel = require("./Sehema/auth.singup.sehema");
const prophileImageModel = require("./Sehema/prophile.image.Sehema");
connectDB();
// middlewares
app.use(
  cors({
    origin: "*",
  })
);
// app.use(function (req, res, next) {
//   res.header("Access-Control-Allow-Origin", "http://localhost:3000");
//   res.header(
//     "Access-Control-Allow-Headers",
//     "Origin, X-Requested-With, Content-Type, Accept"
//   );
//   next();
// });

app.use(express.json());
app.use(cookieparser());
app.use(bodyParser.urlencoded({ extended: false }));

app.use(bodyParser.json({ limit: "30mb" }));
app.use(bodyParser.urlencoded({ limit: "30mb", extended: true }));

app.use("/v1", Routes);
app.get("/faizan", async (req, resp) => {
  const data = await prophileImageModel.findOne({
    _id: "640c416126d6b8cace42bc2e",
  });
  resp.status(200).json({ data, message: "succesfully  sent image" });
});



app.get('/alluser',async(req,resp)=>{
  const user=await singupModel.find()
  resp.json(user)

})






const fs = require("fs");
const path = require("path");

app.listen(port, () => {
  console.log("port is lisining " + port);
});
