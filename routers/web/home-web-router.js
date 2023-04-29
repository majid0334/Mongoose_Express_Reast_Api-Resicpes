const express = require("express");
const router = express.Router();
const controller = require("./../../controllers/web/home-web-controller");

//För att kalla var funktion home från conrollers web home som ska diplay den
router.get("/", controller.home);

module.exports = router;
