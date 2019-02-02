import React from 'react'
import styled from 'styled-components';

import FooterMenu from './FooterMenu/FooterMenu';

const StyledFooter = styled.div`
    display: inline-block;
    width: 100%;
    height: 60px;
    margin-top: 20px;
    padding: 18px 40px;
    background-color: #ffffff;
    border-top: 1px solid #eee;

    @media screen and (max-width: 425px){
        margin-top: 10px;
    }
`;

const Footer = (props) => {
    return(
        <StyledFooter>
            <FooterMenu link="/support" text="Support"/>
            <FooterMenu link="/feedback" text="Feedback"/>
        </StyledFooter>
    )
}

export default Footer;