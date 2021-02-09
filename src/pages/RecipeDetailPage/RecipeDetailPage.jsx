import React, {useEffect, useState} from 'react';
import {Link} from 'react-router-dom';
import './RecipeDetailPage.css';
import recipeService from '../../utils/recipeService';
import IngredientList from '../../components/IngredientList/IngredientList';




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

    return (
        <>
            <h1>{user.name}'s Recipe Book</h1>
            <Link to='/recipeform'>Create New Recipe</Link>

            <div className='page-container'>
                <h1>Detail Page</h1>
                <Link to="/recipebook">Back</Link>
                <h2>{recipe.name}</h2>
                <h4>{recipe.category}</h4>
                <IngredientList ingredients={ingredients} />

            
                <p>{recipe.directions}</p>
                <p>{recipe.cookTime}</p>
                <p>{recipe.servings}</p>
                <p>{recipe.difficulty}</p>
            </div>
        </>
    )
}
