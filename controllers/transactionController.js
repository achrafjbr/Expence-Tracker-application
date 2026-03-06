const { Transaction } = require("../models/transactions.js");

/**
 * @desc adding incomes
 * @method POST
 * @access public
 * @route /api/transaction/income
 */
const addIncnome = async (request, response) => {
  const { body } = request;
  if (body.amount <= 0) {
    return response.status(400).json({
      message: "Amount must be grather than 0.",
    });
  }
  try {
    const transaction = await Transaction.create(body);
    return response.status(200).json({
      data: transaction,
    });
  } catch (error) {
    return response.status(500).json({
      message: error.message,
    });
  }
};

/**
 * @desc adding expenses
 * @method POST
 * @access public
 * @route /api/transaction/income
 */
const addExpense = async (request, response) => {
  const { body } = request;

  if (body.amount <= 0) {
    return response.status(400).json({
      message: "Amount must be grather than 0.",
    });
  }
  try {
    const transaction = await Transaction.create(body);
    return response.status(200).json({
      data: transaction,
    });
  } catch (error) {
    return response.status(500).json({
      message: error.message,
    });
  }
};

/**
 * @desc pagination by page
 * @method GET
 * @access public
 * @route /api/transaction/paging/page=10
 */
const pagination = async (request, response) => {
  console.log(request.query.page);
  
  const page = parseInt(request.query.page) || 1;
  // const limit = parseInt(req.query.limit) || 4;
  const limit = 2;
  const skip = (page - 1) * limit;

  const results = await Transaction.find().skip(skip).limit(limit);

  return response.status(200).json({
    data: results,
  });
};

/**
 * @desc Searching by type and category
 * @method GET
 * @access public
 * @route /api/transaction/search/category=food&type=expense
 */
const filterage = async (request, response) => {
  try {
    const { type, categorie } = request.query;

    let filter = {};

    if (type) {
      filter.type = type;
    }

    if (categorie) {
      filter.categorie = categorie;
    }

    const transactions = categorie
      ? await Transaction.find(filter).populate("categorie")
      : await Transaction.find(filter);

    response.json({
      data: transactions,
    });
  } catch (error) {
    response.status(500).json({ message: error.message });
  }
};

module.exports = {
  addIncnome,
  addExpense,
  pagination,
  filterage,
};
