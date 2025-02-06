"use strict";

const express = require("express");
const app = express();
const PORT = process.env.PORT || 3000;
const usersRoutes = require('./routes/users');
const authRoutes = require('./routes/auth');
const mongoose = require('mongoose');
const { getDatabaseUri } = require("./config");
const { authenticateJWT } = require("./middleware/auth")

// Middleware
app.use(express.json()); 
app.use("/users", usersRoutes);
app.use("/auth", authRoutes);



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
    const usersCollection = db.collection('users');
    const hobbiesCollection = db.collection('hobbies');

    const [users, hobbies] = await Promise.all([
      usersCollection.find({}).toArray(),
      hobbiesCollection.find({}).toArray()
    ]);

    res.status(200).json({ users, hobbies });
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
