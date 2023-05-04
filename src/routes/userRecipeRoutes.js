const express = require("express");
const userRecipeRouter = express.Router();
const {getMyRecipe, addRecipe, editRecipe} = require("../controllers/recipeController");

const auth = require('../middlewares/auth');

userRecipeRouter.get("/",auth,getMyRecipe)

userRecipeRouter.post("/",auth,addRecipe)

userRecipeRouter.put("/:id",auth,editRecipe)

module.exports = userRecipeRouter;