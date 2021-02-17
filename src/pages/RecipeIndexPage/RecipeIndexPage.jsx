import React, {useState, useEffect} from 'react';
import {Link} from 'react-router-dom';
import './RecipeIndexPage.css';
import recipeService from '../../utils/recipeService';
import RecipeBookEntries from '../../components/RecipeBookEntries/RecipeBookEntries';
import Button from '@material-ui/core/Button';
import ButtonGroup from '@material-ui/core/ButtonGroup';
import InputBase from '@material-ui/core/InputBase';
import { fade, makeStyles } from '@material-ui/core/styles';
import SearchIcon from '@material-ui/icons/Search';

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  search: {
    position: 'relative',
    borderRadius: theme.shape.borderRadius,
    backgroundColor: fade(theme.palette.success.light, 0.15),
    '&:hover': {
      backgroundColor: fade(theme.palette.success.light, 0.25),
    },
    marginLeft: 0,
    width: '100%',
    [theme.breakpoints.up('sm')]: {
      marginLeft: theme.spacing(1),
      width: 'auto',
    },
  },
  searchIcon: {
    padding: theme.spacing(0, 2),
    height: '100%',
    position: 'absolute',
    pointerEvents: 'none',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
  inputRoot: {
    color: 'inherit',
  },
  inputInput: {
    padding: theme.spacing(1, 1, 1, 0),
    // vertical padding + font size from searchIcon
    paddingLeft: `calc(1em + ${theme.spacing(4)}px)`,
    transition: theme.transitions.create('width'),
    width: '100%',
    [theme.breakpoints.up('sm')]: {
      width: '12ch',
      '&:focus': {
        width: '20ch',
      },
    },
  },
}));

function RecipeIndexPage(props) {
    const classes = useStyles();
    const [recipeBook, setRecipeBook] = useState('');

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

    // search for recipes based on whats entered in the search bar. 
    // On the spot search using recipeBook from current state (including filtered results)
    // ***REMOVE CONSOLE LOGS
    // probably a more efficient way to do this...
    const handleSearch = (e) => {
        console.log(e.target.value)
        let reg = new RegExp(e.target.value,'gi')  //create regExp based on e.target.value to match below
        let searchResult = recipeBook.filter(recipe => recipe.name.match(reg))
        console.log(searchResult)
        if (searchResult.length > 0) {
            setRecipeBook(searchResult)
        } else {
            loadRecipeBook()
        }
    }

    if(recipeBook && recipeBook.length > 0) {
        return (
            <div>
                <h1>{props.user.name}'s Recipe Book</h1>
                <Link to='/recipeform'>Create New Recipe</Link>
                <br />

                <div className='page-container'>
                    <div>
                        <ButtonGroup aria-label="recipe filter button group">
                        <Button id="ALLRECIPES" onClick={handleFilterClick}>ALL RECIPES</Button>
                        <Button id="BREAKFAST" onClick={handleFilterClick}>BREAKFAST</Button>
                        <Button id="LUNCH" onClick={handleFilterClick}>LUNCH</Button>
                        <Button id="DINNER" onClick={handleFilterClick}>DINNER</Button>
                        <Button id="TREAT" onClick={handleFilterClick}>TREAT</Button>
                        </ButtonGroup>
                    </div>
                    <div className={classes.search}>
                        <div className={classes.searchIcon}>
                            <SearchIcon />
                        </div>
                        <InputBase
                            placeholder="Search…"
                            classes={{
                                root: classes.inputRoot,
                                input: classes.inputInput,
                            }}
                            inputProps={{ 'aria-label': 'search' }}
                            onChange={handleSearch}
                        />
                    </div>
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