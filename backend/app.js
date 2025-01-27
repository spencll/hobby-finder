"use strict";

const express = require("express");
const app = express();
const PORT = process.env.PORT || 3000;
const usersRoutes = require('./routes/users');
const mongoose = require('mongoose');
const { getDatabaseUri } = require("./config");

// Middleware
app.use(express.json()); // To parse JSON bodies
app.use("/users", usersRoutes);

// Connect to the MongoDB database
async function connectDB() {
  try {
    const uri = getDatabaseUri()
    await mongoose.connect(uri);
    console.log("Connected to MongoDB");
  } catch (err) {
    console.error("Failed to connect to MongoDB", err);
  }
}

// Routes
app.get("/", async (req, res) => {
  try {
    const db = mongoose.connection.db;
    const collection = db.collection('users');
    const documents = await collection.find({}).toArray();
    res.status(200).json(documents);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

// Start the server
app.listen(PORT, () => {
  connectDB();
  console.log(`Server is running on port ${PORT}`);
});

module.exports = app;
