"use strict";
/** Database setup for eyEHR. */
const { MongoClient } = require("mongodb");
const { getDatabaseUri } = require("./config");

const dbUri = getDatabaseUri();

const client = new MongoClient(dbUri)

async function connectDB() {
  try {
    await client.connect();
    console.log("Connected to MongoDB");
  } catch (err) {
    console.error("Failed to connect to MongoDB", err);
  }
}

connectDB();

module.exports = client;
