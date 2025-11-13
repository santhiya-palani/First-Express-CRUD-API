const express = require("express");
const app = express();

app.get("/", (req, res) => {
  res.send("First CRUD employee API is running");
});

app.listen(3003, () => console.log("Server running at http://localhost:3003"));