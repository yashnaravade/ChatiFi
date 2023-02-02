import dotenv from "dotenv";
import express from "express";
import mongoose from "mongoose";
import messageModel from "./module/message.js";
import cors from "cors";


dotenv.config();

const PORT = process.env.PORT || 5000;

const app = express();

app.use(express.json());
app.use(cors());


const MONGODB_URL = process.env.MONGODB_URL;

mongoose.connect(MONGODB_URL, (err) => {
  if (err) {
    console.log("Error connecting to MongoDB");
  } else {
    console.log("Connected to MongoDB");
  }
});

app.get("/health", (req, res) => {
  res.json({
    success: true,
  });
});

app.post("/message", async (req, res) => {
  const { user, messageType, messageBody } = req.body;

  const newMessage = new messageModel({
    user: user,
    messageType: messageType,
    messageBody: messageBody,
  });

  const savedMessage = await newMessage.save();

  res.json({ savedMessage });
});

app.get("/message", async (req, res) => {
  const messages = await messageModel.find();

  res.json(messages);
});

app.listen(PORT, () => {
  console.log(`Server is listening on port ${PORT}`);
});
