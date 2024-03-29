import React, {useState} from 'react';
import SignupForm from '../../SignupForm/SignupForm';

function SignupPage (props) {
    const [message, setMessage] = useState('');

    const updateMessage = (msg) => {
        setMessage(msg);
    }

    return (
        <div>
            <SignupForm {...props} updateMessage={updateMessage} />
            <p>{message}</p>
        </div>
    )
}

export default SignupPage;