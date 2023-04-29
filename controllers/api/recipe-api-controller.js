const Recipe = require("./../../models/recipe-model");

//Vår controller skapa vara funktioner
module.exports = {
  //Get all recipes
  getAll: async (req, res) => {
    try {
      //Vi hittar alla ingredienser och sedan displayar dom
      const recipes = await Recipe.find();
      res.send(recipes);
    } catch (error) {
      res.status(500).send(error.massage);
    }
  },

  //Create one recipe
  create: async (req, res) => {
    //För att kunna skica datan
    const recipe = new Recipe({
      title: req.body.title,
      instructions: req.body.instructions,
    });
    //För att spara datan
    try {
      await recipe.save();
      res.status(201).send(recipe);
    } catch (error) {
      res.status(400).send(error.massage);
    }
  },

  getOne: async (req, res) => {
    try {
      //Vi hittar specifik ingrediens och sedan displayar den
      const recipe = await Recipe.findById(req.params.id);
      res.send(recipe);
    } catch (error) {
      res.status(500).send(error.massage);
    }
  },
};
