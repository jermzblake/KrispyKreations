import React, {useState} from 'react';
import RecipeEntryForm from '../../components/RecipeEntryForm/RecipeEntryForm';

function RecipeFormPage (props) {
    const [message, setMessage] = useState('');

    const updateMessage = (msg) => {
        setMessage(msg);
    }

    return (
        <div>
            <RecipeEntryForm {...props} updateMessage={updateMessage} />
            <p>{message}</p>
        </div>
    )

}

export default RecipeFormPage;