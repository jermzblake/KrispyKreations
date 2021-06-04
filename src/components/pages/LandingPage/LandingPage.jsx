import React from 'react';
import {Link} from 'react-router-dom'
import { makeStyles } from '@material-ui/core/styles';


const useStyles = makeStyles((theme) => ({
  root: {
    backgroundImage: `url('https://images.pexels.com/photos/6157063/pexels-photo-6157063.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=700')`,
    height: '100vh'
  },
  heading: {
    fontFamily: 'Snell Roundhand, cursive',
    fontSize: '3rem'
  },
  linkStyle: {
    fontFamily: 'Snell Roundhand, cursive',
    color: '#6B705C',
    fontSize: '2rem'
  }
}));

function LandingPage(props) {
  const classes = useStyles();

    let book = props.user ? 
      <div>
        <h1 className={classes.heading}>Krispy Kreations</h1>
        <Link className={classes.linkStyle} to='/recipebook'>Recipe Book</Link>
      </div>
      : 
      <div>
      <h1 className={classes.heading}>Krispy Kreations</h1>
      </div>

    return (
        <div className={classes.root}>
            {/* Either link to user recipe book or title heading */}
            { book }
        </div>
        
    )
}

export default LandingPage;