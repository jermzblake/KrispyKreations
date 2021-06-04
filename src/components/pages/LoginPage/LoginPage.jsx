import React, {useState} from 'react';
import {Link} from 'react-router-dom';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import userService from '../../../utils/userService';
import { makeStyles } from '@material-ui/core/styles';
import Box from '@material-ui/core/Box';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const useStyles = makeStyles({
    root: {
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        flexDirection: 'column',
    },
    margin: {
        marginTop: 10,
        marginBottom: 10,
    },
    mR: {
        marginRight: 10
    }
})

function LoginPage (props) {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const classes = useStyles();

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            await userService.login({email, password});
            props.handleLogin();
            props.history.push('/');
        } catch (err) {
            toast.error('👎🏾 Invalid Credentials!');
        }
    }

    return (
        <>
            <h1>Login</h1>
            <br/><br/>
            <form autoComplete="off" onSubmit={handleSubmit}>
                <Box className={classes.root}>
                    <TextField 
                        className={classes.margin}
                        variant="filled"
                        type="email"
                        label="Email"
                        placeholder="example@email.com"
                        onChange={e => setEmail(e.target.value)}
                    />
                    <TextField
                        className={classes.margin}
                        type="password" 
                        variant="filled"
                        label="Password"
                        onChange={e => setPassword(e.target.value)}
                    />
                    <Box className={classes.margin}>
                        <Button className={classes.mR} type="submit" variant="contained" color="primary" >Login</Button>
                        <Link to='/'>Cancel</Link>
                        <ToastContainer />
                    </Box>  
                </Box> 
            </form>
        </>
    )
}

export default LoginPage;