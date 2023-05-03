const express = require("express");
const recipeRouter = express.Router();

const {getAllRecipe} = require("../controllers/recipeController");

recipeRouter.post("/",(req,res)=>{
    res.send("add recipe");
});

recipeRouter.get("/",getAllRecipe);


module.exports = recipeRouter;