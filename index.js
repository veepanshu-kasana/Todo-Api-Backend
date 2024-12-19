const express = require('express');
const app = express();

// Load config from env file
require("dotenv").config();
const PORT = process.env.PORT || 4000;

// Middleware to parse json request body
app.use(express.json());

// Import routes for todo API
const todoRoutes = require("./routes/todos");
// Mount the todo API routes
app.use("/api/v1", todoRoutes);

// Start Server
app.listen(PORT, () => {
    console.log(`Server started successfully at ${PORT}`);
})

// Connecting to the DB
const dbConnect = require("./config/database");
dbConnect();

//Default Route
app.get("/", (request,response) => {
    response.send(`<h1>This is HOMEPAGE Baby</h1>`);
})