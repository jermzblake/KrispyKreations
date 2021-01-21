const User = require('../models/user');
const jwt = require('jsonwebtoken');
const SECRET = process.env.SECRET;
const Recipe = require('../models/recipe');

module.exports = {
    signup,
    login
};

async function signup(req, res) {
  console.log("control")
    const user = new User(req.body);
    try {
      await user.save();
      // create a recipe book for new user
      const recipeBook = await createRecipeBook(user)
      // Send back a JWT instead of the user
      const token = createJWT(user); // create a jwt!
      res.json({ token, user, recipeBook });  // Send jwt to REACT
    } catch (err) {
      // Probably a duplicate email
      res.status(400).json(err);
    }
}

async function login(req, res) {
    try {
      const user = await User.findOne({email: req.body.email});
      if (!user) return res.status(401).json({err: 'bad credentials'});
      user.comparePassword(req.body.password, (err, isMatch) => {
        if (isMatch) {
          const token = createJWT(user);
          res.json({token});
        } else {
          return res.status(401).json({err: 'bad credentials'});
        }
      });
    } catch (err) {
      return res.status(400).json(err);
    }
}

  /*----- Helper Functions -----*/

function createJWT(user) {
    return jwt.sign(
      {user}, // data payload
      SECRET,
      {expiresIn: '24h'}
    );
}

async function createRecipeBook(newUser) {
  let newRecipeBook = await new Recipe();
  newRecipeBook.user = (newUser.id);
  newRecipeBook.save(function(err){
    if(err) {
    console.log(err);
    return ({err});
    };
    return (newRecipeBook);
})
}