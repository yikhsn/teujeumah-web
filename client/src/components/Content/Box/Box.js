import React, { Component } from 'react';
import StyledBox from './StyledBox';
import Input from './Input/Input';
import Output from './Output/Output';

class Box extends Component {
        
    render(){
        return (
            <StyledBox>
                <Input 
                    data={ this.props.data }
                    inputChanged={ this.props.inputChanged } 
                    inputCleared={ this.props.inputCleared }/>
                <Output data={ this.props.data } />
            </StyledBox>
        )
    }
}

export default Box;