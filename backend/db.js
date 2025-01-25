"use strict";

const { MongoClient } = require("mongodb");
const { getDatabaseUri } = require("./config");

const dbUri = getDatabaseUri();

const client = new MongoClient(dbUri)

async function connectDB() {
  try {
    await client.connect();

    const db = client.db('hobby');
    await db.dropDatabase();
    
    const collection = db.collection('users');
    const result = await collection.insertOne({
      username: "username",
      password: "password"
    
    });

    console.log("Connected to MongoDB");

  } catch (err) {

    console.error("Failed to connect to MongoDB", err);
  }
}

connectDB();

module.exports = client;
