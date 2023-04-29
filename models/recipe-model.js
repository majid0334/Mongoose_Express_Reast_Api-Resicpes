const mongoose = require("mongoose");

const recipeSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true,
  },
  instructions: {
    type: String,
    required: false,
  },
  ingredients: [
    {
      quantity: String,
      ingredient: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Ingredient",
      },
    },
  ],
});
//Skapar collection till vår databas
module.exports = mongoose.model("Recipe", recipeSchema);
