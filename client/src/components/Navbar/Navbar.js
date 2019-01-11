import React, { Component } from 'react';
import './Navbar.css';
import NavbarMenu from './NavbarMenu/NavbarMenu';
import NavbarBrand from './NavbarBrand/NavbarBrand';

class Navbar extends Component {
  
    
    render() {
        return (
            <div className="Navbar">
                <NavbarBrand />
                <NavbarMenu link='/tentang' text='Tentang'/>
                <NavbarMenu link='/terms' text='Terms'/>
            </div>
        );
    }
}

export default Navbar;