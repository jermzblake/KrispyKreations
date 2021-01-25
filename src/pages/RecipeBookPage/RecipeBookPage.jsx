import React, {useState, useEffect} from 'react';
import {Link} from 'react-router-dom';
import recipeService from '../../utils/recipeService';

function RecipeBookPage(props) {
    const [recipeBook, setRecipeBook] = useState(null);

    useEffect(() => {
        if (!recipeBook) return loadRecipeBook();
    })

  // was using this function to set recipe book state upon signup but trying new strategty
  // might not need this anymore
    // const updateRecipeBook = (book) => {
    //     setRecipeBook({ book })
    // }

    const loadRecipeBook = async () => {
        const book = await recipeService.index();
        setRecipeBook(book);
    }

    return (
        <>
        <h1>Recipe Book</h1>
        <Link to='/recipeform'>New Recipe</Link>
        </>
    )

}

export default RecipeBookPage;