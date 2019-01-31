import React from 'react';
import { Link } from 'react-router-dom';
import './NavbarMenu.css';

const Menu = (props) => {
    return(
        <Link className="Navbar_menu" to={props.link}>
            {props.text}    
        </Link>
    )
}

export default Menu;