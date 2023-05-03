const mongoose = require('mongoose')

const cooklistSchema = mongoose.Schema(
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
        },
        userId: {
            type: mongoose.Schema.Types.ObjectId,
            ref:"User",
            required: true,
        }
    },
    {
        timestamps: true
    }
)

const CooklistRecipe = mongoose.model('CooklistRecipe',cooklistSchema);