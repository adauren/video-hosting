import { routes } from "../routes";
import Video from "../models/Video";

export const home = async (req, res) => {
  try {
    const videos = await Video.find({});
    res.render("home", { pageTitle: "Home", videos });
  } catch (err) {
    console.log(err);
    res.render("home", { pageTitle: "Home", videos: [] });
  }
};

export const search = (req, res) => {
  const {
    query: { term: searchingBy }
  } = req;

  res.render("search", { pageTitle: "Search", searchingBy, videos });
};

export const getUpload = (req, res) => {
  res.render("upload", { pageTitle: "Video Upload" });
};

export const postUpload = (req, res) => {
  const {
    body: { file, title, description }
  } = req;

  res.redirect(routes.videoDetail(123546));
};

export const videoDetail = (req, res) =>
  res.render("videoDetail", { pageTitle: "Video Detail" });
export const editVideo = (req, res) =>
  res.render("editVideo", { pageTitle: "Edit Video" });
export const deleteVideo = (req, res) =>
  res.render("deleteVideo", { pageTitle: "Delete Video" });
