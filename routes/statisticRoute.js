const express = require("express");
const statisticRoute = express.Router();
const {
  totalIncomes,
  totalExpenses,
  soldeOfmonth,
  totalByCategorie,
} = require("../controllers/statisticController");

statisticRoute.get("/incomes", totalIncomes);
statisticRoute.get("/expenses", totalExpenses);
statisticRoute.get("/solde", soldeOfmonth); // /solde?mouth
statisticRoute.get("/total", totalByCategorie); // /total?category

module.exports = {
    statisticRoute
}