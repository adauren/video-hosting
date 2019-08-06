import express from "express";
import routes from "../routes";

const userRouter = express.Router();

userRouter.get("/", (req, res) => {
  res.send("Users");
});

userRouter.get(routes.videoDetail, (req, res) => {
  res.send("User detail");
});

userRouter.get(routes.editVideo, (req, res) => {
  res.send("User edit profile");
});

userRouter.get(routes.changePassword, (req, res) => {
  res.send("User change password");
});

export default userRouter;
