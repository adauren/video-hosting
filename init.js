import "./db";
import app from "./app";
import dotenv from "dotenv";
dotenv.config();
import "./models/Video";

const port = process.env.PORT || 5000;

app.listen(port, () => {
  console.log(`Listenning on: http://localhost:${port}`);
});
