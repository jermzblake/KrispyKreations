import React, {useState} from 'react';
import SignupForm from '../../components/SignupForm/SignupForm';

function SignupPage () {
    const [message, setMessage] = useState('');

    return (
        <div>
            <SignupForm />
        </div>
    )
}

export default SignupPage;