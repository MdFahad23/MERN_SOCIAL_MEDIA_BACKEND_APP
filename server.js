import dotenv from "dotenv";
dotenv.config();
import mongoose from "mongoose";

import app from "./app.js";

const port = process.env.PORT || 3001;

mongoose
  .connect(process.env.DATABASE_URL)
  .then((res) => console.log("SUCCESSFULLY TO CONNECTING DATABASE!"))
  .catch((err) => console.log("DATABASE CONNECTING FAILED!"));

app.listen(port, () => {
  console.log(`APP RUNNING ON PORT ${port} `);
});
