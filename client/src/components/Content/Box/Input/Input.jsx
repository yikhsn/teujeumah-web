import React from 'react';

import StyledInput from './StyledInput';
import StyledInputClear from './StyledInputClear';

const Input = (props) => {
    const { words } = props.data;

    return(
        <StyledInput>
            <StyledInputClear 
                isWords={words} 
                onClick={props.inputCleared } />
            <textarea
                value={words} 
                onChange={ props.inputChanged } />
        </StyledInput>
    )
}

export default Input;