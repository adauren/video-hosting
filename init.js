import dotenv from "dotenv";
import "./db";
import app from "./app";

dotenv.config();

import "./models/Video";
import "./models/Comment";
import "./models/User";

const port = process.env.PORT || 5000;

app.listen(port, () => {
  console.log(`Listenning on: http://localhost:${port}`);
});
