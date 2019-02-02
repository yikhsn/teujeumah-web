import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

const StyledNavbarBrand = styled(Link)`
    text-decoration: none;
    font-size: 22px;
    padding-top: 70px;
    text-align: center;
    color: #08b586;


    :hover {
    color: #07a47a;
    }
`;

export default (props) => <StyledNavbarBrand to="/">Teujeumah</StyledNavbarBrand>