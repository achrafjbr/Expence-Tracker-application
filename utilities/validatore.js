const validateSchema = {
    title: {
        notEmpty: {
            errorMessage: 'Title must not be empty'
        },
        isString: {
            errorMessage: 'Title must be a string'
        },
    },
    amount: {
        notEmpty: {
            errorMessage: 'Amount must not be empty'
        },

    },
    amount: {
        notEmpty: {
            errorMessage: 'Amount must not be empty'
        },

    }



}


module.exports = {
    validateSchema,
}