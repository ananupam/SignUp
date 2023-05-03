const express = require("express");
const recipeRouter = express.Router();

recipeRouter.post("/",(req,res)=>{
    res.send("display all recipe");
})

module.exports = recipeRouter;