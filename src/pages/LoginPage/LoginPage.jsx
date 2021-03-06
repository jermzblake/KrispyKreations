import React, {useState} from 'react';
import {Link} from 'react-router-dom';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import userService from '../../utils/userService';

function LoginPage (props) {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            await userService.login({email, password});
            props.handleLogin();
            props.history.push('/');
        } catch (err) {
            // Try and use a modal or toast instead of an alert
            alert('Invalid Credentials!');
        }
    }

    return (
        <>
            <h1>Login</h1>
            <br/><br/>
            <form autoComplete="off" onSubmit={handleSubmit}>
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
                <div>
                    <Button type="submit" variant="contained" color="primary" >Login</Button>
                    <Link to='/'>Cancel</Link>
                </div>   
            </form>
        </>
    )
}

export default LoginPage;