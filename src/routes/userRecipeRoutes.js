const express = require("express");
const userRecipeRouter = express.Router();
const {getAllRecipe, addRecipe} = require("../controllers/recipeController");

userRecipeRouter.get("/",getAllRecipe)

userRecipeRouter.post("/",addRecipe)

module.exports = userRecipeRouter;