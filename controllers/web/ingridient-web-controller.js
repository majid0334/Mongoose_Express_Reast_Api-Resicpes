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
  showCreateForm: async (req, res) => {
    res.render("ingredients/new");
  },
  create: async (req, res) => {
    const ingredient = new Ingredient({
      name: req.body.name,
      decription: req.body.decription,
    });
    //För att spara datan
    try {
      await ingredient.save();
      res.redirect("/ingredients");
    } catch (error) {
      res.render("ingredients/new", { error: error.massage });
    }
  },
  showEditForm: async (req, res) => {
    try {
      //Vi hittar alla ingredienser och sedan displayar dom
      const ingredient = await Ingredient.findById(req.params.id);
      res.render("ingredients/edit", ingredient);
    } catch (error) {
      res.render("error", { massage: error.massage });
    }
  },
  update: async (req, res) => {
    const ingredient = new Ingredient({
      name: req.body.name,
      decription: req.body.decription,
    });
    //För att spara datan
    try {
      await Ingredient.findByIdAndUpdate({ _id: req.params.id }, req.body);
      res.redirect("/ingredients");
    } catch (error) {
      res.render("ingredients/edit", { error: error.massage });
    }
  },
  delete: async (req, res) => {
    const ingredient = new Ingredient({
      name: req.body.name,
      decription: req.body.decription,
    });
    //För att spara datan
    try {
      await Ingredient.findByIdAndDelete({ _id: req.params.id }, req.body);
      res.redirect("/ingredients");
    } catch (error) {
      res.render("ingredients/edit", { error: error.massage });
    }
  },
};
//testing
