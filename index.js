const express = require("express");
const bodyParser = require("body-parser");

const app = express();

const PORT = process.env.PORT || 4001;

app.get("/", (req, res, next) => {
  res.status(200).send({ message: "You Made it!" });
});

// Central Error handler
app.use((req, res, next) => {
  const error = new Error("Not Found");
  error.status = 404;
  next(error);
});

app.use((error, req, res, next) => {
  res.status(error.status || 500);
  res.json({ message: error.message });
});

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
