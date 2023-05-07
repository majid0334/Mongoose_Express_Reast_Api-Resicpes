const express = require("express");
const router = express.Router();
const controller = require("../../controllers/web/ingridient-web-controller");

//För att kalla var funktion show från conrollers web ingrideinet som ska diplay våra items från databas
router.get("/", controller.showAll);

//För att kalla var funktion show från conrollers web ingrideinet som skapa datan
router.get("/new", controller.showCreateForm);

//För att kalla var funktion show från conrollers web ingrideinet som ska diplay våra en item från databas
router.get("/:id", controller.showOne);
//För att kalla var funktion show från conrollers web ingrideinet skicka datan
router.post("/new", controller.create);
//För att kalla var funktion show från conrollers web ingrideinet och redegerad den
router.get("/:id/edit", controller.showEditForm);
//För att kalla var funktion show från conrollers web ingrideinet och redegerad den
router.post("/:id/edit", controller.update);
//För att kalla var funktion show från conrollers web ingrideinet och redegerad den
router.post("/:id/delete", controller.delete);
module.exports = router;
