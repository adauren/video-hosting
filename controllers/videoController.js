import routes from "../routes";
import Video from "../models/Video";

export const home = async (req, res) => {
  try {
    const videos = await Video.find({}).sort({ _id: -1 });
    return res.render("home", { pageTitle: "Home", videos });
  } catch (err) {
    console.log(err);
    return res.render("home", { pageTitle: "Home", videos: [] });
  }
};

export const search = (req, res) => {
  const {
    query: { term: searchingBy }
  } = req;

  return res.render("search", { pageTitle: "Search", searchingBy, videos });
};

export const getUpload = (req, res) => {
  return res.render("upload", { pageTitle: "Video Upload" });
};

export const postUpload = async (req, res) => {
  const {
    body: { title, description },
    file: { path }
  } = req;

  const newVideo = await Video.create({
    fileUrl: path,
    title,
    description
  });

  console.log(newVideo);

  return res.redirect(routes.videoDetail(newVideo.id));
};

export const videoDetail = async (req, res) => {
  const {
    params: { id }
  } = req;
  try {
    const video = await Video.findById(id);

    return res.render("videoDetail", { pageTitle: video.title, video });
  } catch (err) {
    console.log(err);
    return res.redirect(routes.home);
  }
};

export const getEditVideo = async (req, res) => {
  const {
    params: { id }
  } = req;
  try {
    const video = await Video.findById(id);
    return res.render("editVideo", { pageTitle: `Edit ${video.title}`, video });
  } catch (err) {
    console.log(err);
    return res.redirect(routes.home);
  }
};

export const postEditVideo = async (req, res) => {
  const {
    params: { id },
    body: { title, description }
  } = req;

  try {
    await Video.findOneAndUpdate({ _id: id }, { title, description });
    return res.redirect(routes.videoDetail(id));
  } catch (err) {
    return res.redirect(routes.home);
  }
};

export const deleteVideo = async (req, res) => {
  const {
    params: { id }
  } = req;

  try {
    await Video.findOneAndDelete({ _id: id });
  } catch (err) {
    console.log(err);
  }

  return res.redirect(routes.home);
};
