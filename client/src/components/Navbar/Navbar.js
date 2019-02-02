import React, { Component } from 'react';
import styled from 'styled-components';

import NavbarMenu from './NavbarMenu/NavbarMenu';
import NavbarBrand from './NavbarBrand/NavbarBrand';

const StyledNavbar = styled.div`
    width: 100%;
    height: 60px;
    background: #fff;
    border-bottom: 1px solid #dedede;
    padding: 18px 40px;

`;

class Navbar extends Component {
    render() {
        return (
            <StyledNavbar>
                <NavbarBrand />
                <NavbarMenu link='/terms' text='Terms'/>
                <NavbarMenu link='/about' text='Tentang'/>
            </StyledNavbar>
        );
    }
}

export default Navbar;