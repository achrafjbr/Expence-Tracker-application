const express = require("express");
const budgetRoute = express.Router();

const { addBudgetForCategorie } = require("../controllers/budgetController");

budgetRoute.post("/", addBudgetForCategorie);

module.exports = {
  budgetRoute,
};
