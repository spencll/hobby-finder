"use strict";

/** Application setup for eyEHR. */
const express = require("express");
const client = require("./db"); // Import the MongoDB client
const { MongoClient } = require("mongodb");

const app = express();
const PORT = process.env.PORT || 3000;

// Middleware
app.use(express.json()); // To parse JSON bodies

// Connect to the MongoDB database
async function connectDB() {
  try {
    await client.connect();
    console.log("Connected to MongoDB");
  } catch (err) {
    console.error("Failed to connect to MongoDB", err);
  }
}

// Routes
app.get("/", async (req, res) => {
  try {
    const db = client.db('hobby');
    const collection = db.collection('users');
    const documents = await collection.find({}).toArray();
    res.status(200).json(documents);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

// Example route to fetch data from MongoDB
app.get("/data", async (req, res) => {
  try {
    const db = client.db("eyEHR");
    const collection = db.collection("yourCollectionName"); // Replace with your collection name
    const data = await collection.find({}).toArray();
    res.json(data);
  } catch (err) {
    console.error("Failed to fetch data", err);
    res.status(500).send("Internal Server Error");
  }
});

// Start the server
app.listen(PORT, () => {
  connectDB();
  console.log(`Server is running on port ${PORT}`);
});

module.exports = app;
