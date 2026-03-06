const { Category } = require("../models/categories");

/**
 * @desc adding category
 * @method POST
 * @access public
 * @route /api/category
 */
const addCategory = async (request, response) => {
  const { body } = request;
  try {
    const category = await Category.create(body);

    return response.status(200).json({
      data: category,
    });
  } catch (error) {
    return response.status(200).json({
      message: error.message,
    });
  }
};

module.exports = {
  addCategory,
};
