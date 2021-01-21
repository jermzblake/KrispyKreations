import React, {useState} from 'react';
import { Link } from 'react-router-dom';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import userService from '../../utils/userService';
import recipeService from '../../utils/recipeService';


function SignupForm (props) {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [passwordConf, setPasswordConf] = useState('');

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            console.log( 'Email:', email, 'Password: ', password); 
            await userService.signup({name, email, password, passwordConf});
            // Let <App> know a user has signed up!
            props.handleSignup();
            // Successfully signed up - show root page
            props.history.push('/');
        } catch (err) {
            console.log(err.message)
            // Invalid user data (probably duplicate email)
            props.updateMessage(err.message);
            }        
    }

    const isFormInvalid = () => {
        return !(name && email && password === passwordConf);
    }

    return (
        <>
            <h1>Signup</h1>
            <br/>
            <br/>
            <form autoComplete="off" onSubmit={handleSubmit}>
                <TextField 
                    variant="filled"
                    label="Name"
                    onChange={e => setName(e.target.value)}
                />
                <TextField 
                    variant="filled"
                    type="email"
                    label="Email"
                    placeholder="example@email.com"
                    onChange={e => setEmail(e.target.value)}
                />
                <TextField
                    type="password" 
                    variant="filled"
                    label="Password"
                    onChange={e => setPassword(e.target.value)}
                />
                <TextField
                    type="password" 
                    variant="filled"
                    label="Confirm Password"
                    onChange={e => setPasswordConf(e.target.value)}
                />
                <div>
                    <Button type="submit" variant="contained" color="primary" disabled={isFormInvalid()}>Submit</Button>
                    <Link to='/'>Cancel</Link>
                </div>                
            </form>

        </>
    )
}

export default SignupForm;