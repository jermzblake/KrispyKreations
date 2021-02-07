import React, {useEffect, useState} from 'react';
import {Link} from 'react-router-dom';
import './RecipeDetailPage.css';
import recipeService from '../../utils/recipeService';

export default function RecipeDetailPage({match, history, user}) {
    const [recipe, setRecipe] = useState('')
    
    const paramsId = match.params.id

    useEffect(() => {
        console.log(paramsId)
        if(!recipe) return loadRecipe(paramsId);
    })

    const loadRecipe = async (params) => {
        try {
        const recipeDetail = await recipeService.getEntry(params);
        console.log(recipeDetail)
        setRecipe(recipeDetail);
        }catch (err) {
            console.log('ERROR: ' + err.message)
        }
    }

    return (
        <>
            <div className='page-container'>
                <h1>Detail Page</h1>
                <Link to="/recipebook">Back</Link>
            </div>
        </>
    )
}
