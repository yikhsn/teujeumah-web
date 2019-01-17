import React, { Component } from 'react';
import './Result.css';
import Box from './Box/Box';
import Translation from './Box/Translation';

class Result extends Component{
    render() {
        
        const { type, words } = this.props.data;
        
        const renderBoxLeft = type.map( (cur, id) =>     
            <Box 
                key         = { id }
                words        = { words }
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
                    <Translation 
                        translations = { translations }
                        words = { words }
                    />
                </div>
            </div>
        )
    }
}

export default Result;