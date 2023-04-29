const Ingredient = require("./../../models/ingredient-model");

//Vår controller skapa vara funktioner
module.exports = {
  //Get all ingdeient
  getAll: async (req, res) => {
    try {
      //Vi hittar alla ingredienser och sedan displayar dom
      const ingredients = await Ingredient.find();
      res.send(ingredients);
    } catch (error) {
      res.status(500).send(error.massage);
    }
  },

  getOne: async (req, res) => {
    try {
      //Vi hittar specifik ingrediens och sedan displayar den
      const ingredients = await Ingredient.findById(req.params.id);
      res.send(ingredients);
    } catch (error) {
      res.status(500).send(error.massage);
    }
  },

  //Create one ingreient
  create: async (req, res) => {
    //För att kunna skica datan
    const ingredient = new Ingredient({
      name: req.body.name,
      decription: req.body.decription,
    });
    //För att spara datan
    try {
      await ingredient.save();
      res.status(201).send(ingredient);
    } catch (error) {
      res.status(400).send(error.massage);
    }
  },
  //GEt one ingrideeint
};
