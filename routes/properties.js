const express = require("express");
const router = express.Router();

// Get All Properties
router.get("/", (req, res) => {
  res.send("Get properties Route");
});

// Get Property by id
router.get("/:id", (req, res) => {
  res.send(`You are requesitng a property by id`);
});

// Add property
router.post("/", (req, res) => {
  res.send("Add property");
});

// Update property
router.put("/", (req, res) => {
  res.send("Update property");
});

// Delete property
router.delete("/", (req, res) => {
  res.send("Delete property");
});

module.exports = router;
