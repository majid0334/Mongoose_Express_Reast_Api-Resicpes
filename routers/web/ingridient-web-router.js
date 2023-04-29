const express = require("express");
const router = express.Router();
const controller = require("../../controllers/web/ingridient-web-controller");

//För att kalla var funktion show från conrollers web ingrideinet som ska diplay våra items från databas
router.get("/", controller.showAll);

//För att kalla var funktion show från conrollers web ingrideinet som ska diplay våra en item från databas
router.get("/:id", controller.showOne);

module.exports = router;
