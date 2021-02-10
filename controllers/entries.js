const Recipe = require('../models/recipe');

module.exports = {
    create,
    delete: deleteOne,
    show,
    update
}

async function create (req, res) {
    let recipe = await Recipe.findOne({user: req.user._id});
    recipe.recipeEntries.push(req.body)  
    recipe.save(function(err){
        if(err) {
        console.log(err);
        return res.json({err});
        };
        return res.json(recipe);
    })  
}

async function show (req, res) {
    let recipes = await Recipe.findOne({'recipeEntries._id': req.params.id});
    let entry = recipes.recipeEntries.id(req.params.id);
    return res.json(entry);
}

async function deleteOne (req, res) {
    let recipes = await Recipe.findOne({'recipeEntries._id': req.params.id});
    recipes.recipeEntries.id(req.params.id).remove();
    recipes.save(function(err){
        return res.json(recipes)
    })
}

async function update (req, res) {
    console.log('controller id: ' + req.params.id)
    let recipes = await Recipe.findOne({'recipeEntries._id': req.params.id});
    let entry = await recipes.recipeEntries.id(req.params.id);
    for (let key in req.body) {
        entry[key] = req.body[key];
    };
    try{
        await recipes.save();
    } catch (err) {
        console.log(err);
    }
    return res.json(recipes);
}