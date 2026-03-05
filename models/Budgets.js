const mongoose = require("mongoose");

const budgetSchema = mongoose.Schema(
  {
    limitAmount: {
      type: Number,
      required: true,
    },
    month: {
      type: String,
      required: true,
    },
    year: {
      type: String,
      required: true,
    },
    categorie: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Categorie",
    },
  },
  { timestamps: true },
);

const Budget = mongoose.model("Budget", budgetSchema);

module.exports = {
  Budget,
};
