import React, {useEffect, useState} from 'react';
import {Link} from 'react-router-dom';
import './RecipeDetailPage.css';
import recipeService from '../../../utils/recipeService';
import IngredientList from '../../IngredientList/IngredientList';
import Button from '@material-ui/core/Button';
import Grid from '@material-ui/core/Grid'
import { makeStyles, Box } from '@material-ui/core';
import DeleteIcon from '@material-ui/icons/Delete';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';
import Slide from '@material-ui/core/Slide';

const Transition = React.forwardRef(function Transition(props, ref) {
    return <Slide direction="up" ref={ref} {...props} />;
  });

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
    },
    headerLink: {
        textDecoration: 'none',
        color: '#6B705C'
    }
}))

export default function RecipeDetailPage({match, history, user}) {
    const classes = useStyles()
    const [recipe, setRecipe] = useState('')
    const [ingredients, setIngredients] = useState([])
    const [open, setOpen] = useState(false);
    
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
        setOpen(false);
        await recipeService.deleteEntry(recipe)
        history.push('/recipebook')
    }

    const handleClickOpen = () => {
        setOpen(true);
      };
    
      const handleClose = () => {
        setOpen(false);
      };

    // if user's recipe has an image display it otherwise line break
    const imageDisplay = (recipe.image) ? <img src={recipe.image}  alt="food"/> : <br />

    return (
        <>
            <Link to='/recipebook' className={classes.headerLink}><h1>{user.name}'s Recipe Book</h1></Link>
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
                    onClick={handleClickOpen}
                    startIcon={<DeleteIcon />}
                >
                    DELETE
                </Button>
                <Dialog
                    open={open}
                    TransitionComponent={Transition}
                    keepMounted
                    onClose={handleClose}
                    aria-labelledby="alert-dialog-slide-title"
                    aria-describedby="alert-dialog-slide-description"
                >
                    <DialogTitle id="alert-dialog-slide-title">{"Are you sure you want to delete this recipe?"}</DialogTitle>
                    <DialogContent>
                    <DialogContentText id="alert-dialog-slide-description">
                        Deleting a recipe cannot be undone. Please confirm you want to delete. If you got here by mistake just hit cancel.
                    </DialogContentText>
                    </DialogContent>
                    <DialogActions>
                    <Button onClick={handleClose} color="primary">
                        Cancel
                    </Button>
                    <Button onClick={handleDelete} color="primary">
                        Confirm Delete
                    </Button>
                    </DialogActions>
                </Dialog>
                </Grid>
                </Grid>
            </div>
        </>
    )
}
