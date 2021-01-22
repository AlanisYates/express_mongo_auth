const express = require("express");
const dotenv = require("dotenv");
const morgan = require("morgan");
const connectDB = require("./config/db");

// Load Config
dotenv.config({ path: "./config/config.env" });

// Connect to db
connectDB();

const app = express();

// Logging
if (process.env.NODE_ENV === "develpment") {
  app.use(morgan("dev"));
}

// Routes
const propertyRouter = require("./routes/properties");
app.use("/properties", propertyRouter);

const PORT = process.env.PORT || 5000;

app.listen(
  PORT,
  console.log(`Server running in ${process.env.NODE_ENV} mode on port ${PORT}`)
);
