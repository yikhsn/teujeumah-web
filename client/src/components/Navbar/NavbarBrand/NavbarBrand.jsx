import React from 'react';
import { Link } from 'react-router-dom';
import './NavbarBrand.css';

const NavbarBrand = (props) => {
    return(
        <Link to="/" className="Navbar__brand">Teujeumah</Link>
    )
}

export default NavbarBrand;