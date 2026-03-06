const express = require("express");
const transactionRoute = express.Router();
const {
  addExpense,
  addIncnome,
  pagination,
  filterage,
} = require("../controllers/transactionController");

transactionRoute.post("/income", addIncnome);
transactionRoute.post("/expense", addExpense);
transactionRoute.get("/paging", pagination); // /paging/?page
transactionRoute.get("/search", filterage); // /search?type&category

module.exports = { transactionRoute };
