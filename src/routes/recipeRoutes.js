const express = require("express");
const recipeRouter = express.Router();

recipeRouter.post("/",(req,res)=>{
    res.send("add recipe");
});

recipeRouter.get("/",(req,res)=>{
    res.send("get all recipes");
})


module.exports = recipeRouter;