const mongoose = require('mongoose')

const recipeSchema = mongoose.Schema(
    {
        name: {
            type: String,
            required: [true]
        },
        ingredients: {
            type: [String],
            required: true,
        },
        steps: {
            type: [String],
            required: true,
        },
        type: {
            type: String,
            required: true,
        },
        cookingtime: {
            type: Number,
            required: true,
        },
        category: {
            type: String,
            required: true,
        },
        image: {
            type: String,
            required: true,
        }
    },
    {
        timestamps: true
    }
)

const Recipe = mongoose.model('Recipe',recipeSchema);