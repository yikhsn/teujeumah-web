import React, { Component } from 'react';
import './Box.css';
import Input from './Input/Input';
import Output from './Output/Output';

class Box extends Component {
        
    render(){
        return (
            <div className="BoxInput">
                <Input inputChanged={ this.props.inputChanged } />
                <Output data={ this.props.data } />
            </div>
        )
    }
}

export default Box;