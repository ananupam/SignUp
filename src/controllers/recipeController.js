const Recipe = require("../models/recipeModel");
const UserRecipe = require("../models/userRecipeModel");

const getAllRecipe = async(req,res)=>{
    try{
        const recipes = await Recipe.find({});
        res.status(200).json(products);
    }catch(error){
        console.group(error.message);
        res.status(500).json({message: error.message});
    }
}

const addRecipe = async(req,res)=>{
    try{
        const recipe = await UserRecipe.create(req.body);
        res.status(200).json(recipe);  
    }catch(error){
        console.group(error.message);
        res.status(500).json({message: error.message});
    }
}


module.exports = {getAllRecipe, addRecipe}