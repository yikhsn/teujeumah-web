import React from 'react';
import './NavbarMenu.css';

const Menu = (props) => {
    return(
        <a className="Navbar_menu" href={props.link}>
            {props.text}
        </a>
    )
}

export default Menu;