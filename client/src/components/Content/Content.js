import React, { Component } from 'react';
import './Content.css';
import Box from './Box/Box';
import Result from './Result/Result';

class Content extends Component {
    render() {
        return (
            <div className="Content">
                <Box />
                <Result />
            </div>
        )
    }
}

export default Content;