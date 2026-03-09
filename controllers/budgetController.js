const { categoryExised } = require('../Services/budgetServices');
const { Budget } = require('../models/budgets')
const addBudgetForCategorie = async (request, response) => {
    const { body } = request;
           console.log('Budget existée', category );
    try {
        const category = await categoryExised(body.categoryId);
        // Category dose not existed yet, show the user the msg bellow.
        if (!category) return response.status(404).json({
            message: 'Category dose not existed. Please create one and Try again'
        });
        // If existed...,  doning the following process.
        // - keep the category
        const budget = await Budget.create(body);

        return response.status(201).json({
            data: budget,
        });
    } catch (error) {
        return response.status(500).json({
            message: error.message
        });
    }
}


module.exports = {
    addBudgetForCategorie
}