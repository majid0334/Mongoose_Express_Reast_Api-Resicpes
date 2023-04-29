//Hämtar strukturen på var webbsida
const Ingredient = require("./../../models/ingredient-model");

module.exports = {
  //Get all ingdeients
  showAll: async (req, res) => {
    try {
      //Vi hittar alla ingredienser och sedan displayar dom
      const ingredients = await Ingredient.find().lean();
      res.render("ingredients/index", { ingredients });
    } catch (error) {
      res.render("error", { massage: error.massage });
    }
  },
  //Get one ingridient
  showOne: async (req, res) => {
    try {
      //Vi hittar alla ingredienser och sedan displayar dom
      const ingredient = await Ingredient.findById(req.params.id);
      res.render("ingredients/single", ingredient);
    } catch (error) {
      res.render("error", { massage: error.massage });
    }
  },
};
