import React from 'react';

import StyledOutput from './StyledOutput'

const Output = (props) => {
    const {words, translation } = props.data;
    
    const output = translation.length ? translation.join(' ') : words;

    return(
        <StyledOutput>
            <textarea type="text" value={output} readOnly />
        </StyledOutput>
    )
}

export default Output;