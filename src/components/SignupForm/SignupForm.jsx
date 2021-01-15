import React, {useState} from 'react';
import { Link } from 'react-router-dom';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';


function SignupForm () {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [passwordConf, setPasswordConf] = useState('');

    return (
        <>
            <h1>Signup</h1>
            <Link to='/'>RETURN HOME</Link>
            <br/>
            <br/>
            <form autoComplete="off">
                <TextField 
                    variant="filled"
                    label="Name"
                />
                <TextField 
                    variant="filled"
                    type="email"
                    label="Email"
                    placeholder="example@email.com"
                />
                <TextField 
                    variant="filled"
                    label="Password"
                />
                <TextField 
                    variant="filled"
                    label="Confirm Password"
                />
            </form>
            <div>
                <Button variant="contained" color="primary">Submit</Button>
                <Link to='/'>Cancel</Link>
            </div>
        </>
    )
}

export default SignupForm;