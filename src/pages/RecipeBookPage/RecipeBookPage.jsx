import React, {useState, useEffect} from 'react';
import {Link} from 'react-router-dom';
import recipeService from '../../utils/recipeService';
import RecipeBookEntries from '../../components/RecipeBookEntries/RecipeBookEntries';

function RecipeBookPage(props) {
    const [recipeBook, setRecipeBook] = useState('');

    useEffect(() => {
        if (!recipeBook) return loadRecipeBook();
    })

  // was using this function to set recipe book state upon signup but trying new strategty
  // might not need this anymore
    // const updateRecipeBook = (book) => {
    //     setRecipeBook({ book })
    // }

    const loadRecipeBook = async () => {
        const currentRecipeBookEntries = await recipeService.index().then(res => res.recipeEntries);
        setRecipeBook(currentRecipeBookEntries);
    }

    if(recipeBook && recipeBook.length > 0) {
        return (
            <>
                <h1>{props.user.name}'s Recipe Book</h1>
                <Link to='/recipeform'>New Recipe</Link>
            </>
        )
    }
    return (
        <>
        <h1>{props.user.name}'s Recipe Book</h1>
        <Link to='/recipeform'>You have no recipes. Add one!</Link>
        </>
    )

}

export default RecipeBookPage;