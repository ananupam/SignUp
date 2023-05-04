const Recipe = require("../models/recipeModel");
const UserRecipe = require("../models/userRecipeModel");

const getAllRecipe = async(req,res)=>{
    try{
        const recipes = await UserRecipe.find({});
        res.status(200).json(recipes);
    }catch(error){
        console.group(error.message);
        res.status(500).json({message: error.message});
    }
}

const getMyRecipe = async(req,res)=>{
    try{
        const recipes = await UserRecipe.find({userId: req.userId});
        res.status(200).json(recipes);
    }catch(error){
        console.group(error.message);
        res.status(500).json({message: error.message});
    }
}

const addRecipe = async(req,res)=>{
    const {name, ingredients, steps, type, cookingtime, category, image} = req.body;
        const newRecipe =new UserRecipe({
            name: name,
            ingredients: ingredients,
            steps: steps,
            type: type,
            cookingtime: cookingtime,
            category: category,
            image: image,
            userId: req.userId
        });
    try{
        await newRecipe.save();
        res.status(201).json(newRecipe);  
    }catch(error){
        console.log(error.message);
        res.status(500).json({message: error.message});
    }
}

const editRecipe = async(req,res)=>{
    try{
        const {id} = req.params;
        const recipe= await UserRecipe.findByIdAndUpdate(id, req.body, {new: true});
        if (!recipe){
            return res.status(404).json({mesage:`cannot find any item with ID: ${id}`})
        } 
        res.status(200).json(recipe);  
    }catch(error){
        console.group(error.message);
        res.status(500).json({message: error.message});
    }
}

module.exports = {getMyRecipe, addRecipe, editRecipe, getAllRecipe}