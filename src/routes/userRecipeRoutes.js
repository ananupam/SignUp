const express = require("express");
const userRecipeRouter = express.Router();
const {getAllRecipe, addRecipe} = require("../controllers/recipeController");

const auth = require('../middlewares/auth');

userRecipeRouter.get("/",auth,getAllRecipe)

userRecipeRouter.post("/",auth,addRecipe)

userRecipeRouter.put("/:id",auth,)

module.exports = userRecipeRouter;