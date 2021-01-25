import React, {useState} from 'react';
import { Link } from 'react-router-dom';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import recipeService from '../../utils/recipeService';

function RecipeEntryForm (props) {
    const [name, setName] = useState('');
    const [ingredients, setIngredients] = useState([]);
    const [directions, setDirections] = useState('')
    const [category, setCategory] = useState('');
    const [difficulty, setDifficulty] = useState('');
    const [prepTime, setPrepTime] = useState(0);
    const [cookTime, setCookTime] = useState(0);
    const [servings, setServings] = useState(1);
    const [cuisineType, setCuisineType] = useState('');
    const [image, setImage] = useState('');

    const formRef = React.createRef();

    const addEntry = async(e) => {
        e.preventDefault();
        if (!this.formRef.current.checkValidity()) return;  // Do nothing if the form is invalid
        await recipeService.createEntry(this.state).then(diary=> this.props.updateDiary(diary));
        this.props.history.push('/recipepage');
    }

    return (
        <h1>Recipe Form</h1>
    )
}

export default RecipeEntryForm;