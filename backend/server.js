import express from "express";
import dotenv from "dotenv";
import { connectDB } from "./config/connectDB.js";

dotenv.config();

const app = express();

app.get("/", (req, res) => {
  res.send("API is running...");
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  connectDB();
  console.log("Server started running");
});
