import React, {useState, useEffect} from 'react';
import { Link } from 'react-router-dom';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import MenuItem from '@material-ui/core/MenuItem';
import { makeStyles } from '@material-ui/core/styles';
import FormControl from '@material-ui/core/FormControl';
import FormHelperText from '@material-ui/core/FormHelperText';
import OutlinedInput from '@material-ui/core/Input';
import InputLabel from '@material-ui/core/InputLabel';
import recipeService from '../../utils/recipeService';
import Grid from '@material-ui/core/Grid';

const difficulties = [
    {
        value: 'Easy',
        label: 'Easy'
    },
    {
        value: 'Medium',
        label: 'Medium'
    },
    {
        value: 'Hard',
        label: 'Hard'
    }
];

const categories = [
    {
        value: 'Breakfast',
        label: 'Breakfast'
    },
    {
        value: 'Lunch',
        label: 'Lunch'
    },
    {
        value: 'Dinner',
        label: 'Dinner'
    },
    {
        value: 'Treat',
        label: 'Treat'
    }
];

const useStyles = makeStyles((theme) => ({
    root: {
      '& .MuiTextField-root': {
        margin: theme.spacing(4),
        width: '25ch',
      },
    },
    center: {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        margin: '0 auto',
        width: '50%'
    },
    buttonMargin: {
        margin: '20px 20px'
    }
}));

export default function RecipeUpdateForm({match, history, updateMessage}) {
    const classes = useStyles();
    const [name, setName] = useState('');
    const [ingredients, setIngredients] = useState('');
    const [directions, setDirections] = useState('')
    const [category, setCategory] = useState('Treat');
    const [difficulty, setDifficulty] = useState('Medium');
    const [prepTime, setPrepTime] = useState(null);
    const [cookTime, setCookTime] = useState(null);
    const [servings, setServings] = useState(null);
    const [cuisineType, setCuisineType] = useState('');
    const [image, setImage] = useState('');

    // store param id to pass into the updateEntry function
    // use this for routing purposes and to link back to detail page
    const entryId = match.params.id;

    // after initial load set state to previous recipe values
    useEffect(() => {
        const getRecipeEntryState = async () => {
            recipeService.getEntry(match.params.id)
            .then(entry => {
                setName(entry.name)
                setIngredients(entry.ingredients.join('\n'))
                setDirections(entry.directions)
                setCategory(entry.category)
                setDifficulty(entry.difficulty)
                setPrepTime(entry.prepTime)
                setCookTime(entry.cookTime)
                setServings(entry.servings)
                setCuisineType(entry.cuisineType)
                setImage(entry.image)
            })
        };

        getRecipeEntryState()
    }, [match.params.id])    // adding match.params.id to list of dependencies to satisfy exhaustive-deps ESLint rule

    const updateEntry = async(e) => {
        e.preventDefault();
        let ingredientsArr = ingredients.split('\n') // convert string of ingredients to array of ingredient strings
        try{
            await recipeService.updateEntry({
                name,
                ingredients: ingredientsArr,
                directions,
                category,
                difficulty,
                prepTime,
                cookTime,
                servings,
                cuisineType,
                image,
                entryId
            });
            history.push(`/recipebook/${entryId}`);
        } catch (err) {
            console.log(`Error: ${err.message}`)
            updateMessage(err.message);
        }
    }

    const isFormInvalid = () => {
        return !(name && ingredients && directions && category);
    }

    return (
        <>
            <h3>Update Form</h3>
            <br />
            <br />
            <form className={classes.root} autoComplete="off" onSubmit={updateEntry}>
                <TextField 
                    label="Name"
                    value={name}
                    onChange={e => setName(e.target.value)}
                />
                <TextField 
                    label="Cuisine"
                    onChange={e => setCuisineType(e.target.value)}
                    helperText="Optional"
                    placeholder="Caribbean"
                    value={cuisineType || ''}
                />
                <br /><br />
                <TextField
                    select 
                    label="Category"
                    value={category}
                    onChange={e => setCategory(e.target.value)}
                    helperText="Please select the category"
                >
                    {categories.map((option) => (
                        <MenuItem key={option.value} value={option.value}>
                        {option.label}
                        </MenuItem>
                    ))}
                </TextField>
                <TextField
                    select 
                    label="Difficulty"
                    value={difficulty}
                    onChange={e => setDifficulty(e.target.value)}
                    helperText="Please select the difficulty"
                >
                    {difficulties.map((option) => (
                        <MenuItem key={option.value} value={option.value}>
                        {option.label}
                        </MenuItem>
                    ))}
                </TextField>
                <br /><br />
                <TextField
                    variant="outlined"
                    label="Ingredients"
                    multiline
                    rows={4}
                    value={ingredients}
                    // placeholder="previously stored ingredients will be replaced with what you enter now or remain unchanged if you do not type anything"
                    helperText="Add a new ingredient on a new line (press enter to add line)"
                    onChange={e => setIngredients(e.target.value)}
                />
                <TextField
                    variant="outlined"
                    label="Directions"
                    multiline
                    rows={4}
                    onChange={e => setDirections(e.target.value)}
                    value={directions}
                />
                <br /><br />
                <Grid container className={classes.center}>
                    <Grid item xs={6}>
                        <FormControl>
                            <InputLabel htmlFor="prep-time" shrink>Prep Time</InputLabel>
                            <OutlinedInput
                            id="prep-time" 
                            type="number" 
                            onChange={e => setPrepTime(e.target.value)} 
                            value={prepTime || ''} 
                            aria-describedby="prep-helper-text" />
                            <FormHelperText id="prep-helper-text">Enter prep time in minutes</FormHelperText>
                        </FormControl>
                    </Grid>
                    <Grid item xs={6}>
                        <FormControl>
                            <InputLabel htmlFor="cook-time" shrink>Cook Time</InputLabel>
                            <OutlinedInput
                            id="cook-time" 
                            type="number" 
                            onChange={e => setCookTime(e.target.value)} 
                            value={cookTime || ''} 
                            aria-describedby="cook-helper-text" />
                            <FormHelperText id="cook-helper-text">Enter cook time in minutes</FormHelperText>
                        </FormControl>
                    </Grid>
                    <Grid item xs={6}>
                        <FormControl>
                            <InputLabel htmlFor="serving-size" shrink>Serving Size</InputLabel>
                            <OutlinedInput
                            id="serving-size" 
                            type="number" 
                            onChange={e => setServings(e.target.value)} 
                            value={servings || ''} 
                            aria-describedby="serving-helper-text" />
                            <FormHelperText id="serving-helper-text">Enter serving size</FormHelperText>
                        </FormControl>
                    </Grid>
                <br />
                    <Grid item xs={6}>
                        <FormControl>
                            <InputLabel htmlFor="image-url" shrin>Image</InputLabel>
                            <OutlinedInput 
                            id="image-url"
                            type="text" 
                            onChange={e => setImage(e.target.value)} 
                            value={image || ''}
                            aria-describedby="image-helper-text" />
                            <FormHelperText id="image-helper-text">Enter URL of image location</FormHelperText>
                        </FormControl>
                    </Grid>
                </Grid>
                <div>
                    <Button className={classes.buttonMargin} type="submit" variant="contained" color="primary" disabled={isFormInvalid()}>Submit</Button>
                    <Link className={classes.buttonMargin} to={`/recipebook/${entryId}`}>Cancel</Link>
                </div>  
            </form>
        </>
    )
}