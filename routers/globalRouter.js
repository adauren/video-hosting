import express from "express";
import routes from "../routes";

const globalRouter = express.Router();

globalRouter.get(routes.home, (req, res) => {
  res.send("Home Page");
});

globalRouter.get(routes.join, (req, res) => {
  res.send("Join Page");
});

globalRouter.get(routes.login, (req, res) => {
  res.send("Login Page");
});

globalRouter.get(routes.logout, (req, res) => {
  res.send("Logout Page");
});

globalRouter.get(routes.search, (req, res) => {
  res.send("Search Page");
});

export default globalRouter;
