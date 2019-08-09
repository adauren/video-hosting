import "./db";
import app from "./app";
import dotenv from "dotenv";
dotenv.config();
import "./models/Video";
import "./models/Comment";

const port = process.env.PORT || 5000;

app.listen(port, () => {
  console.log(`Listenning on: http://localhost:${port}`);
});
