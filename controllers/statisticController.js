const { Transaction } = require("../models/transactions");

/**
 * @desc getting Total incomes
 * @method GET
 * @access public
 * @route /api/statistics/income
 */
const totalIncomes = async (_, response) => {
  try {
    const incomes = await Transaction.aggregate([
      { $match: { type: "income" } },
      {
        $group: {
          _id: "$type",
          total: { $sum: "$amount" },
        },
      },
    ]);
    return response.status(200).json({
      data: incomes,
    });
  } catch (error) {
    return response.status(500).json({
      message: error.message,
    });
  }
};

/**
 * @desc getting Total expenses
 * @method GET
 * @access public
 * @route /api/statistics/expense
 */
const totalExpenses = async (_, response) => {
  try {
    const expense = await Transaction.aggregate([
      { $match: { type: "expense" } },
      {
        $group: {
          _id: "$type",
          total: { $sum: "$amount" },
        },
      },
    ]);
    return response.status(200).json({
      data: expense,
    });
  } catch (error) {
    return response.status(500).json({
      message: error.message,
    });
  }
};

/**
 * @desc getting Total expenses
 * @method GET
 * @access public
 * @route /api/statistics/totalCategory
 */
const totalByCategorie = async (_, response) => {
  try {
    const totalByCategory = await Transaction.aggregate([
      { $match: { type: "expense" } },
      {
        $group: {
          _id: "$categorie",
          total: { $sum: "$amount" },
        },
      },
      {
        $lookup: {
          from: "categories",
          localField: "_id",
          foreignField: "_id",
          as: "category",
        },
      },
    ]);
    return response.status(200).json({
      data: totalByCategory.length == 0 ? 0 : totalByCategory,
    });
  } catch (error) {
    return response.status(500).json({
      message: error.message,
    });
  }
};

/**
 * @desc getting Total targeted month.
 * @method GET
 * @access public
 * @route /api/statistics/totalCategory
 */
const totalOfMonth = async (request, response) => {
  const {
    body: { month },
  } = request;

  try {
    const totalByCategory = await Transaction.aggregate([
      {
        $match: {
          $expr: {
            $eq: [{ $month: "$date" }, month],
          },
        },
      },

      {
        $group: {
          _id: null,
          totalExpense: { $sum: "$amount" },
        },
      },
    ]);
    return totalByCategory
      ? response.status(200).json({
          data: totalByCategory,
        })
      : response.status(200).json({
          data: "There's no transaction in this month...!",
        });
  } catch (error) {
    return response.status(500).json({
      message: error.message,
    });
  }
};

/**
 * @desc getting total by each month
 * @method GET
 * @access public
 * @route /api/statistics/totalCategory
 */
const totalByMonth = async (request, response) => {
  try {
    const totalByCategory = await Transaction.aggregate([
      {
        $project: {
          _id: { $month: "$date" },
          total: { $sum: "$amount" },
        },
      },
    ]);
    return totalByCategory
      ? response.status(200).json({
          data: totalByCategory,
        })
      : response.status(200).json({
          data: "There's no transaction in this month...!",
        });
  } catch (error) {
    return response.status(500).json({
      message: error.message,
    });
  }
};

module.exports = {
  totalIncomes,
  totalExpenses,
  totalOfMonth,
  totalByMonth,
  totalByCategorie,
};
