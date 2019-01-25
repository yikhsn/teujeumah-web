import React from 'react';
import './Output.css';

const Output = (props) => {

    const {words, translation } = props.data;
    
    const output = translation.length ? translation.join(' ') : words;

    return(
        <div className="Output">
            <textarea type="text" value={output} readOnly />
        </div>
    )
}

export default Output;