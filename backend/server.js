import express from "express";
import dotenv from "dotenv";
import mongoose from "mongoose";

dotenv.config();

const app = express();

app.get("/", (req, res) => {
  res.send("API is running...");
});

mongoose
  .connect(process.env.MONGO_URI)
  .then(() => console.log("Connected to mongoDB"))
  .catch((err) => console.log("MongoDB error: ", err));

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log("Server started running"));
