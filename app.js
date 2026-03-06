const express = require("express");
const app = express();
const connectDb = require("./config/db.js");
const { transactionRoute } = require("./routes/transactionRouter.js");
const { categoryRoute } = require("./routes/categorieRoute.js");
const { budgetRoute } = require("./routes/bugetRoute.js");
const { statisticRoute } = require("./routes/statisticRoute.js");
//Connection establishement
connectDb();
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use("/api/transactions", transactionRoute);
app.use("/api/category", categoryRoute);
app.use("/api/statistics", statisticRoute);
app.use("/api/budget", budgetRoute);

// Server.
const port = process.env.PORT || 3000;
app.listen(port, (err) => {
  if (!err) console.log("Server Starting...");
});
