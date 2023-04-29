const mongoose = require("mongoose");
//skapar struktur till databas
const ingredientSchema = new mongoose.Schema({
  name: { type: String, required: true },
  decription: { type: String, required: false },
});

//skapar vår collection och exporterar den
module.exports = mongoose.model("Ingredient", ingredientSchema);
