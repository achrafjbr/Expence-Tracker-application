const express = require("express");
const statisticRoute = express.Router();
const {
  totalIncomes,
  totalExpenses,
  totalOfMonth,
  totalByCategorie,
  totalByMonth,
} = require("../controllers/statisticController");

statisticRoute.get("/incomes", totalIncomes);
statisticRoute.get("/expenses", totalExpenses);
statisticRoute.get("/totalCategory", totalByCategorie); // /total?category
statisticRoute.get("/montly-total", totalOfMonth); // /solde?mouth
statisticRoute.get("/total-every-month", totalByMonth); // /solde?mouth

module.exports = {
    statisticRoute
}