//För att kunna gömma sin alsutnigs port och lösonrd
require("dotenv").config();
const express = require("express");
const exphbs = require("express-handlebars");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
const cors = require("cors");

//Requrie home
const homeWebRouter = require("./routers/web/home-web-router");
//Requrie routes
const ingdeientWebRouter = require("./routers/web/ingridient-web-router");
//Requrie routes
const ingdeientApiRouter = require("./routers/api/ingredient-api-router");
//Requrie routes
const recipeApiRouter = require("./routers/api/recipe-api-router");

//För att anslutna till databas
mongoose
  .connect(process.env.MONGODB_URL)
  .then(() => console.log("MDB connected..."))
  .catch((err) => console.log(err));
const app = express();

app.use(
  cors({
    origin: "*",
  })
);

app.engine(
  "hbs",
  exphbs.engine({
    defaultLayout: "main",
    extname: ".hbs",
  })
);

app.set("view engine", "hbs");
app.use(express.static("public"));
//För hämta datan från vara inpput annars går det in få in datan och detta är en extention

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

//Use routes
app.use("/", homeWebRouter);
app.use("/ingredients", ingdeientWebRouter);
app.use("/api/ingredients", ingdeientApiRouter);
app.use("/api/recipes", recipeApiRouter);

app.listen(5500, () => {
  console.log(`http://localhost:5500/`);
});
