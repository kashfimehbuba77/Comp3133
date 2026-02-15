const express = require("express");
const mongoose = require("mongoose");
const usersRouter = require("./routes/users");

const SERVER_PORT = process.env.PORT || 8081;

const app = express();
app.use(express.json());

// TODO - Replace your connection details
const DB_NAME = "lab4_users_database";
const DB_USER_NAME = "admin";
const DB_PASSWORD = "password123!";
const CLUSTER_ID = "tqloabq";

const DB_CONNECTION = `mongodb+srv://${DB_USER_NAME}:${DB_PASSWORD}@cluster0.${CLUSTER_ID}.mongodb.net/${DB_NAME}?retryWrites=true&w=majority&appName=Cluster0`;

async function connectToMongoDB(connectionString = DB_CONNECTION) {
  await mongoose.connect(connectionString);
}

// Routes
app.use("/users", usersRouter);

app.listen(SERVER_PORT, async () => {
  console.log(`Server is running on port ${SERVER_PORT}`);
  try {
    await connectToMongoDB(DB_CONNECTION);
    console.log("Connected to MongoDB");
  } catch (error) {
    console.error("Error connecting to MongoDB:", error.message);
  }
});
