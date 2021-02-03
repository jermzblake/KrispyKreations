import React, {useState} from 'react';
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
        margin: theme.spacing(1),
        width: '25ch',
      },
    },
  }));

function RecipeEntryForm (props) {
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

    const addEntry = async(e) => {
        e.preventDefault();
        await recipeService.createEntry({
            name,
            ingredients,
            directions,
            category,
            difficulty,
            prepTime,
            cookTime,
            servings,
            cuisineType,
            image
        });
        props.history.push('/recipebook');
    }

    const isFormInvalid = () => {
        return !(name && ingredients && directions && category);
    }

    return (
        <div>
            <h1>Recipe Form</h1>
            <br />
            <br />
            <form className={classes.root} autoComplete="off" onSubmit={addEntry}>
                <TextField 
                    label="Name"
                    onChange={e => setName(e.target.value)}
                />
                <TextField 
                    label="Cuisine"
                    onChange={e => setCuisineType(e.target.value)}
                    helperText="Optional"
                    placeholder="Caribbean"
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
                    placeholder="1 cup of LOVE"
                    helperText="Add a new ingredient on a new line (press enter to add line)"
                    onChange={e => setIngredients(e.target.value.split('\n'))}
                />
                <TextField
                    variant="outlined"
                    label="Directions"
                    multiline
                    rows={4}
                    onChange={e => setDirections(e.target.value)}
                />
                <br /><br />
                <FormControl>
                    <InputLabel htmlFor="prep-time">Prep Time</InputLabel>
                    <OutlinedInput id="prep-time" type="number" onChange={e => setPrepTime(e.target.value)} aria-describedby="prep-helper-text" />
                    <FormHelperText id="prep-helper-text">Enter prep time in minutes</FormHelperText>
                </FormControl>
                <FormControl>
                    <InputLabel htmlFor="cook-time">Cook Time</InputLabel>
                    <OutlinedInput id="cook-time" type="number" onChange={e => setCookTime(e.target.value)} aria-describedby="cook-helper-text" />
                    <FormHelperText id="cook-helper-text">Enter cook time in minutes</FormHelperText>
                </FormControl>
                <FormControl>
                    <InputLabel htmlFor="serving-size">Serving Size</InputLabel>
                    <OutlinedInput id="serving-size" type="number" onChange={e => setServings(e.target.value)} aria-describedby="serving-helper-text" />
                    <FormHelperText id="serving-helper-text">Enter serving size</FormHelperText>
                </FormControl>
                <div>
                    <Button type="submit" variant="contained" color="primary" disabled={isFormInvalid()}>Submit</Button>
                    <Link to='/recipebook'>Cancel</Link>
                </div>  
            </form>
        </div>
    )
}

export default RecipeEntryForm;