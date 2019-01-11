import React, { Component } from 'react';
import './Result.css';
import Box from './Box/Box';

class Result extends Component{
    render() {
        return(
            <div className="Result">
                <div className="Result__left">
                    <Box />
                    <Box />

                </div>
                <div className="Result__right">
                    <Box />
                    <Box />
                </div>
            </div>
        )
    }
}

export default Result;