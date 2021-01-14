import React from 'react';
import { NavLink, Link } from 'react-router-dom';
import './NavBar.css';

const NavBar = (props) => {
    return (
        <Link to='/test' className='NavBar-link' >TEST LINK</Link>
    )
}

export default NavBar;