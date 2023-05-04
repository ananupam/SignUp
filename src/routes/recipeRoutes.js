const express = require("express");
const recipeRouter = express.Router();

const {getAllRecipe} = require("../controllers/recipeController");

recipeRouter.get("/",getAllRecipe);


module.exports = recipeRouter;