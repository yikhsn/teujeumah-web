import React, { Component } from 'react';
import './Navbar.css';
import NavbarMenu from './NavbarMenu/NavbarMenu';
import NavbarBrand from './NavbarBrand/NavbarBrand';

class Navbar extends Component {
  
    
    render() {
        return (
            <div className="Navbar">
                <NavbarBrand />
                <NavbarMenu link='/terms' text='Terms'/>
                <NavbarMenu link='/about' text='Tentang'/>
            </div>
        );
    }
}

export default Navbar;