const mongoose = require('mongoose');

const entrySchema = new mongoose.Schema({
    name: {type: String, required: true},
    ingredients: [{type: String, required: true}],
    directions: {type: String, required: true},
    category: {type: String, required: true},
    difficulty: {type: String},
    prepTime: {type: Number},
    cookTime: {type: Number},
    servings: {type: Number},
    cuisineType: {type: Number},
    image: {type: String}
}, {
    timestamps: true
})

const recipeSchema = new mongoose.Schema({
    user: {type: mongoose.Schema.Types.ObjectId, ref: 'User'}, //embedding User
    recipeEntries: [entrySchema] //embedding entrySchema
}, {
    timestamps: true
})

module.exports = mongoose.model('Recipe', recipeSchema);