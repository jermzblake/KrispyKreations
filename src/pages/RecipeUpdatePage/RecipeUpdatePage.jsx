import React, {useState} from 'react';
import RecipeUpdateForm from '../../components/RecipeUpdateForm/RecipeUpdateForm';

export default function RecipeUpdatePage(props) {
    const [message, setMessage] = useState('');

    const updateMessage = (msg) => {
        setMessage(msg);
    }

    return (
        <>
        <h1>Update Recipe</h1>
        <RecipeUpdateForm {...props} updateMessage={updateMessage} />
        <p>{message}</p>
        </>
    )
}