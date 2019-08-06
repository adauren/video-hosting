import express from "express";
import routes from "../routes";

const videoRouter = express.Router();

videoRouter.get("/", (req, res) => {
  res.send("Videos");
});

videoRouter.get(routes.videoUpload, (req, res) => {
  res.send("Video upload");
});

videoRouter.get(routes.videoDetail, (req, res) => {
  res.send("Video detail");
});

videoRouter.get(routes.editVideo, (req, res) => {
  res.send("Video edit");
});

videoRouter.get(routes.deleteVideo, (req, res) => {
  res.send("Video delete");
});

export default videoRouter;
