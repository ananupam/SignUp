const Recipe = require("../models/recipeModel");

const getAllRecipe = async(req,res)=>{
    try{
        const recipes = await Recipe.find({});
        res.status(200).json(products);
    }catch(error){
        console.group(error.message);
        res.status(500).json({message: error.message});
    }
}


module.exports = {getAllRecipe}