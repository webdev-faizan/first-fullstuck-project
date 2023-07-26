const { Router } = require("express");
const multer = require("multer");
const {
  Post,
  UpdatePost,
  UpsertPost,
  DeletePost,
  ListPosts,
  CreateAttachemt,
  CreateAttachments,
  PostsById,
} = require("../controllers/post.controller");
const Authenticate = require("../helpers/authenticate");
const MulterS3Middlware = require("../uplodingMiddleware/Multers3");

const PostRouter = Router();

PostRouter.get("/", ListPosts);
PostRouter.get("/:id", PostsById);
PostRouter.post("/", Post);
PostRouter.put("/:id", Authenticate, UpdatePost);
// PostRouter.put("/upsert/:id", Authenticate, UpsertPost);
PostRouter.delete("/:id", Authenticate, DeletePost);

const upload = multer({ dest: "uploads/" });

// Attachment
PostRouter.post("/faizan", (r, p) => {
  p.send("faizan");
});

PostRouter.post("/attachments", upload.array("file", 10), CreateAttachments);
// PostRouter.post("/attachment", upload.single("file"), CreateAttachemt);
PostRouter.post("/attachment", MulterS3Middlware, CreateAttachemt);

module.exports = PostRouter;
