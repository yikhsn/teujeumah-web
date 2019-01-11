import React from 'react';
import './FooterMenu.css';

const FooterMenu = (props) => {
    return(
        <a className="Footer_menu" href={props.link}>
            {props.text}
        </a>
    )
}

export default FooterMenu;