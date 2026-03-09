
const { Category } = require('../models/categories.js');
const { Budget } = require('../models/budgets.js')


const categoryExised = async (categoryId) => {
    try {
        const category = await Category.find({ _id: categoryId });
        console.log('Categorie existée', category );
        
        if (category) return true;
        return Promise.reject('Messa');
    } catch (error) {
        return new Error(error);
    }
}

const getBudgetByCategory = async (categorie) => {
    try {
        const budget = await Budget.find({ categorie: categorie }).populate('categorie');
        if (!budget) return undefined
        return budget
    } catch (error) {
        return new Error('Something went wrong.')
    }
}

module.exports = {
    categoryExised,
    getBudgetByCategory
}