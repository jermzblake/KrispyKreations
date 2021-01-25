const Recipe = require('../models/recipe');

module.exports = {
    create,
    index,
}

// Creating initial recipe book through user controller signup. 
// This create function can be used if subsequent recipe books need to be created.
async function create (req, res) {
    let recipe = await new Recipe(req.body);
    recipe.user = (req.user._id);
    recipe.save(function(err){
        if(err) {
        console.log(err);
        return res.json({err});
        };
        return res.json(recipe);
    })  
};

async function index (req,res) {
        let recipe = await Recipe.findById(req.user._id);
        console.log(`this req.user in index: ${req.user.id}`);
        console.log(`recipe in index ctrl ${recipe}`)
        return res.json(recipe);
}