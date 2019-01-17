import React, { Component } from 'react';
import './Result.css';
import Box from './Box/Box';

class Result extends Component{
    render() {
        
        const { type, word } = this.props.data;
        
        const renderBoxLeft = type.map( (cur, id) =>     
            <Box 
                key         = { id }
                word        = { word }
                word_type   = { cur.word_type }
                synonyms    = { cur.synonyms }
                examples    = { cur.examples }
            />
        )

        const translations = type.map( cur => {
            return {
                word_type:      cur.word_type,
                translation:    cur.translations 
            }
        });

        return(
            <div className="Result">
                <div className="Result__left">
                    { renderBoxLeft }
                </div>
                <div className="Result__right">
                    <Box 
                        translations = { translations }
                    />
                </div>
            </div>
        )
    }
}

export default Result;