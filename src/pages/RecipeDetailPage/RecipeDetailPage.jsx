import React, {useEffect, useState} from 'react';
import {Link} from 'react-router-dom';
import './RecipeDetailPage.css';
import recipeService from '../../utils/recipeService';
import IngredientList from '../../components/IngredientList/IngredientList';
import Button from '@material-ui/core/Button';



export default function RecipeDetailPage({match, history, user}) {
    const [recipe, setRecipe] = useState('')
    const [ingredients, setIngredients] = useState([])
    
    useEffect(() => {
        if(!recipe) return loadRecipe(match.params.id);
    })

    const loadRecipe = async (params) => {
        try {
        const recipeDetail = await recipeService.getEntry(params);
        setRecipe(recipeDetail);
        setIngredients(recipeDetail.ingredients);
        }catch (err) {
            console.log('ERROR: ' + err.message);
        }
    }

    const handleDelete = async (e) => {
        await recipeService.deleteEntry(recipe)
        history.push('/recipebook')
    }

    // if user's recipe has an image display it otherwise line break
    const imageDisplay = (recipe.image) ? <img src={recipe.image}  alt="food image"/> : <br />

    return (
        <>
            <h1>{user.name}'s Recipe Book</h1>
            <Link to='/recipeform'>Create New Recipe</Link>

            <div className='page-container'>
                <h1>Detail Page</h1>
                <Link to="/recipebook">Back</Link>
                <h2>{recipe.name}</h2>
                <h4>{recipe.category}</h4>
                <p>{recipe.cuisineType}</p>
                <br />
                {imageDisplay}
                <IngredientList ingredients={ingredients} />

            

                <p>Prep Time: {recipe.prepTime || 'N/A'} Cook Time:{recipe.cookTime || 'N/A'} </p>
                <p>Serving Size: {recipe.servings}</p>
                <p>Difficulty: {recipe.difficulty}</p>
                <br />
                <br />
                <h3>Directions</h3>
                <p>{recipe.directions}</p>
                <Button variant="contained" color="secondary" onClick={handleDelete}>
                    DELETE
                </Button>
                <Button variant="contained" href={`/recipe/edit/${recipe._id}`}>Update</Button>
            </div>
        </>
    )
}
