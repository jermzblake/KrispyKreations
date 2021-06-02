import React, {useEffect, useState} from 'react';
import {Link} from 'react-router-dom';
import './RecipeDetailPage.css';
import recipeService from '../../../utils/recipeService';
import IngredientList from '../../IngredientList/IngredientList';
import Button from '@material-ui/core/Button';
import Grid from '@material-ui/core/Grid'
import { makeStyles, Box } from '@material-ui/core';
import DeleteIcon from '@material-ui/icons/Delete';

const useStyles = makeStyles((theme) =>({
    root: {
        flexGrow: 1,
    },
    margin: {
        marginTop: 10,
        marginBottom: 10,
    },
    mRL: {
        marginRight: 10,
        marginLeft: 10
    },
    center: {
        display: 'block',
        marginLeft: 'auto',
        marginRight: 'auto',
    }
}))

export default function RecipeDetailPage({match, history, user}) {
    const classes = useStyles()
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
    const imageDisplay = (recipe.image) ? <img src={recipe.image}  alt="food"/> : <br />

    return (
        <>
            <h1>{user.name}'s Recipe Book</h1>
            <Link to='/recipeform'>Create New Recipe</Link>

            <div className='page-container'>
                <Grid container className={classes.root} >
                <Grid item xs={12}>
                    <h1>{recipe.name}</h1>
                    <h3 className={classes.margin}>{recipe.category}</h3>
                    <h4 className={classes.margin}>{recipe.cuisineType}</h4>
                </Grid>
                <br />
                <Box className={classes.center}>
                {imageDisplay}
                </Box>
                <Grid item xs={12}  className={classes.margin}>
                    <IngredientList ingredients={ingredients} />
                </Grid>
                <Grid item xs={4} className={classes.margin}>
                    <p>Serving Size: {recipe.servings}</p>
                </Grid>
                <Grid item xs={4} className={classes.margin}>
                    <p>Prep Time: {recipe.prepTime || 'N/A'} </p>
                </Grid>
                <Grid item xs={4} className={classes.margin}>
                    <p>Cook Time: {recipe.cookTime || 'N/A'} </p>
                </Grid>

                <br />
                <br />
                <Grid item xs={12}  className={classes.margin}>
                <h2  className={classes.margin}>Directions</h2>
                <p><em>Difficulty: {recipe.difficulty}</em></p>
                <p>{recipe.directions}</p>
                </Grid>
                <Grid item xs={12} className={classes.margin} >
                <Button className={classes.mRL} variant="contained" href={`/recipe/edit/${recipe._id}`}>Update</Button>
                <Button 
                    className={classes.mRL} 
                    variant="contained" 
                    color="secondary" 
                    onClick={handleDelete}
                    startIcon={<DeleteIcon />}
                >
                    DELETE
                </Button>
                </Grid>
                </Grid>
            </div>
        </>
    )
}
