const express = require("express");
const categoryRoute = express.Router();
const {addCategory} = require('../controllers/categorieController')


/**
 * @desc adding Category
 * @method POST
 * @access public
 * @route /api/transaction/income
 */
categoryRoute.post('/',addCategory);


module.exports= {
    categoryRoute
}