import React, { Component } from 'react'
import './Footer.css';
import FooterMenu from './FooterMenu/FooterMenu';

class Footer extends Component{
    render(){
        return(
            <div className="Footer">
                <FooterMenu link="/support" text="Support"/>
                <FooterMenu link="/feedback" text="Feedback"/>
            </div>
        )
    }
}

export default Footer;