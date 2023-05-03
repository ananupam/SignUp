const mongoose = require('mongoose')

const cooklistSchema = mongoose.Schema(
    {
        myrecipe: {
            type: String,
            required: true,
        },
        description: {
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