import React, {useState, useEffect} from 'react';
import {Link} from 'react-router-dom';
import './RecipeIndexPage.css';
import recipeService from '../../utils/recipeService';
import RecipeBookEntries from '../../components/RecipeBookEntries/RecipeBookEntries';
import Button from '@material-ui/core/Button';
import ButtonGroup from '@material-ui/core/ButtonGroup';


function RecipeIndexPage(props) {
    const [recipeBook, setRecipeBook] = useState('');
    // const [breakfastFilter, setBreakfastFilter] = useState(false);
    // const [lunchFilter, setLunchFilter] = useState(false);
    // const [dinnerFilter, setDinnerFilter] = useState(false);
    // const [treatFilter, setTreatFilter] = useState(false);

    useEffect(() => {
        if (!recipeBook) return loadRecipeBook();
    })

  // I don't need this yet but it's here for updating state after CRUD if needed
    const updateRecipeBook = (updatedBook) => {
        setRecipeBook({ updatedBook })
    }

    // filter is the value passed in from handleFilterClick
    const loadRecipeBook = async (filter) => {
        let currentRecipeBookEntries = await recipeService.index().then(res => res.recipeEntries);

        // check for filters being passed in and filter the recipe book accordingly
        // replace alerts with toast or modal on final product
        if (filter === "BREAKFAST") {
            let filterRecipes = currentRecipeBookEntries.filter(recipe =>
                recipe.category === "Breakfast")
                console.log(filterRecipes)
                if (filterRecipes.length > 0) {
                    return setRecipeBook(filterRecipes)
                } else {
                    alert('no Breakfast recipes')
                }
        }
        else if (filter === "LUNCH") {
            let filterRecipes = currentRecipeBookEntries.filter(recipe =>
                recipe.category === "Lunch")
                if (filterRecipes.length > 0) {
                    return setRecipeBook(filterRecipes)
                } else {
                    alert('no Lunch recipes')
                }
        }
        else if (filter === "DINNER") {
            let filterRecipes = currentRecipeBookEntries.filter(recipe =>
                recipe.category === "Dinner")
                if (filterRecipes.length > 0) {
                    return setRecipeBook(filterRecipes)
                } else {
                    alert('no Dinner recipes')
                }
        }
        else if (filter === "TREAT") {
            let filterRecipes = currentRecipeBookEntries.filter(recipe =>
                recipe.category === "Treat")
                if (filterRecipes.length > 0) {
                    return setRecipeBook(filterRecipes)
                } else {
                    alert('no Treat recipes')
                }
        }
        // no filter just set the whole recipe book
        setRecipeBook(currentRecipeBookEntries);
    }

    const handleFilterClick = (e) => {
        // pass either target.id or target.innerHTML to loadRecipeBook
        // this way no matter where on the button is clicked the correct target will be captured
        loadRecipeBook(e.target.id || e.target.innerHTML)
    }

    if(recipeBook && recipeBook.length > 0) {
        return (
            <div>
                <h1>{props.user.name}'s Recipe Book</h1>
                <Link to='/recipeform'>Create New Recipe</Link>
                <br />
                <ButtonGroup aria-label="recipe filter button group">
                <Button id="ALLRECIPES" onClick={handleFilterClick}>ALL RECIPES</Button>
                <Button id="BREAKFAST" onClick={handleFilterClick}>BREAKFAST</Button>
                <Button id="LUNCH" onClick={handleFilterClick}>LUNCH</Button>
                <Button id="DINNER" onClick={handleFilterClick}>DINNER</Button>
                <Button id="TREAT" onClick={handleFilterClick}>TREAT</Button>
                </ButtonGroup>
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