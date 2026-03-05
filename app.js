const express = require("express");

const app = express();
const connectDb = require("./config/db.js");

// Connection establishement
connectDb();

const port = process.env.PORT || 3000;
app.listen(port, (err) => {
  if (!err) console.log("Server Starting...");
});
