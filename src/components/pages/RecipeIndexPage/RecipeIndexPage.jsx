import React, {useState, useEffect} from 'react';
import {Link} from 'react-router-dom';
import './RecipeIndexPage.css';
import recipeService from '../../../utils/recipeService';
import RecipeBookEntries from '../../RecipeBookEntries/RecipeBookEntries';
import InputBase from '@material-ui/core/InputBase';
import { fade, makeStyles } from '@material-ui/core/styles';
import SearchIcon from '@material-ui/icons/Search';
import Select from '@material-ui/core/Select';
import FormControl from '@material-ui/core/FormControl';
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import Grid from '@material-ui/core/Grid';

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
    margin: '0 auto',
    marginTop: 16,
    marginLeft: 76,
    // margin: theme.spacing(1),
    width: '50%',
    // [theme.breakpoints.up('sm')]: {
    //   marginLeft: theme.spacing(1),
    //   width: 'auto',
    // },
  },
  searchIcon: {
    padding: theme.spacing(0, 1),
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
    width: '70%',
    [theme.breakpoints.up('sm')]: {
      width: '12ch',
      '&:focus': {
        width: '20ch',
      },
    },
  },
  formControl: {
      margin: theme.spacing(1),
      minWidth: 150,
  },
}));

function RecipeIndexPage(props) {
    const classes = useStyles();
    const [recipeBook, setRecipeBook] = useState('');
    const [filter, setFilter] = useState('');

    useEffect(() => {
        if (!recipeBook) return loadRecipeBook();
    })

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
        setFilter(e.target.value)
        // TODO should loadRecipe book getting it's value from state...?
        loadRecipeBook(e.target.value)
    }

    // search for recipes based on whats entered in the search bar. 
    // On the spot search using recipeBook from current state (including filtered results)
    // ***REMOVE CONSOLE LOGS
    // probably a more efficient way to do this...  store a default book in state?
    const handleSearch = (e) => {
        let reg = new RegExp(e.target.value,'gi')  //create regExp based on e.target.value to match below
        let searchResult = recipeBook.filter(recipe => recipe.name.match(reg));

        // if searchResult has elements set it to state otherwise just load default recipe book
        searchResult.length > 0 ? setRecipeBook(searchResult) : loadRecipeBook()
    }

    if(recipeBook && recipeBook.length > 0) {
        return (
            <div>
                <h1>{props.user.name}'s Recipe Book</h1>
                <Link to='/recipeform'>Create New Recipe</Link>
                <br />

                <div className='page-container'>
                        <Grid container className={classes.root} >
                            < Grid item xs={4}>
                    <FormControl variant="outlined" className={classes.formControl}>
                        <InputLabel id="filter-select-label">Filter</InputLabel>
                        <Select
                            labelId="filter-select-label"
                            id="filter-select"
                            value={filter}
                            onChange={handleFilterClick}
                            label="Filter"
                        >
                            <MenuItem value={"ALLRECIPES"}>
                                <em>None</em>
                            </MenuItem>
                            <MenuItem value={"BREAKFAST"}>BREAKFAST</MenuItem>
                            <MenuItem value={"LUNCH"}>LUNCH</MenuItem>
                            <MenuItem value={"DINNER"}>DINNER</MenuItem>
                            <MenuItem value={"TREAT"}>TREAT</MenuItem>
                        </Select>
                    </FormControl>
                            </ Grid>
                            <Grid item xs={8}>
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
                            </Grid>
                        </Grid>
                    {recipeBook.map((entry, idx) => (
                        <RecipeBookEntries
                            recipeEntry={entry}
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