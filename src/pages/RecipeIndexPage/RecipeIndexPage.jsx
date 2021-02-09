import React, {useState, useEffect} from 'react';
import {Link} from 'react-router-dom';
import './RecipeIndexPage.css';
import recipeService from '../../utils/recipeService';
import RecipeBookEntries from '../../components/RecipeBookEntries/RecipeBookEntries';


function RecipeIndexPage(props) {
    const [recipeBook, setRecipeBook] = useState('');

    useEffect(() => {
        if (!recipeBook) return loadRecipeBook();
    })

  // I think this function will be necessary for updating state after CRUD 
    const updateRecipeBook = (updatedBook) => {
        setRecipeBook({ updatedBook })
    }

    const loadRecipeBook = async () => {
        const currentRecipeBookEntries = await recipeService.index().then(res => res.recipeEntries);
        setRecipeBook(currentRecipeBookEntries);
    }

    if(recipeBook && recipeBook.length > 0) {
        return (
            <div>
                <h1>{props.user.name}'s Recipe Book</h1>
                <Link to='/recipeform'>Create New Recipe</Link>
                <div className='page-container'>
                    {recipeBook.map((entry, idx) => (
                        <RecipeBookEntries
                            recipeEntry={entry}
                            updateRecipeBook={updateRecipeBook}
                            {...props}
                            key={idx}
                        />   
                    ))}
                </div>
            </div>
        )
    }
    return (
        <>
        <h1>{props.user.name}'s Recipe Book</h1>
        <Link to='/recipeform'>You have no recipes. Add one!</Link>
        </>
    )

}

export default RecipeIndexPage;