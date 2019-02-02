import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';

const StyledFooterMenu = styled(Link)`
    float: right;
    margin-left: 20px;
    padding: 5px 0;
    text-decoration: none;
    font-size: 12px;
    color: #888;
    text-align: center;

    :last-child {
        margin-left: 0;
    }
    
    :hover, :focus {
    color: #777;
    }
`;

export default (props) => 
    <StyledFooterMenu to={props.link}> {props.text}</StyledFooterMenu>