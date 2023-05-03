const express = require("express");
const recipeRouter = express.Router();

const {getAllRecipe} = require("../controllers/recipeController");

recipeRouter.post("/",);

recipeRouter.get("/",getAllRecipe);


module.exports = recipeRouter;