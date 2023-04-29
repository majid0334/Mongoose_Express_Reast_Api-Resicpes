const express = require("express");
const router = express.Router();

const controller = require("./../../controllers/api/ingridient-api-controller");

//Istället fört skriva routes/api/ingredientes/ Hela tiden så gör vi det i app.js och vi skriver bara / istället
//Controller.getALL Kör var funcktion getALL som ligger i ingridient-api-conroller filen som ska display allt
router.get("/", controller.getAll);

//Istället fört skriva routes/api/ingredientes/ Hela tiden så gör vi det i app.js och vi skriver bara / istället
//Controller.getONE Kör var funcktion getALL som ligger i ingridient-api-conroller filen som ska displayr en ingredient
router.get("/:id", controller.getOne);

//För att lägga upp data
//Istället fört skriva routes/api/ingredientes/ Hela tiden så gör vi det i app.js och vi skriver bara / istället
//Controller.create Kör var funcktion getALL som ligger i ingridient-api-conroller filen som lägger i vår databas
router.post("/", controller.create);

module.exports = router;
