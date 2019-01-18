import React from 'react';
import './Box.css';

import capitalize from '../../../../helpers/capitalize_each_word';

const Box = (props) => {

    let synonymsRender, examplesRender = [];

    const { words, word_type, synonyms, examples } = props;

    synonymsRender = (
        <div className="Box__sub">
            <div className="Box__sub--title">Sinonim:</div>
            <div className="Box__content">
                {
                    synonyms.map((syn, id) => {
                        return <span className="Box__content--synonym" key={id}>{syn}</span>
                    })
                }
            </div>
        </div>
    )

    examplesRender = (
        <div className="Box__sub">
            <div className="Box__sub--title">Contoh kalimat:</div>
            <div className="Box__content">
                {
                    examples.map((example, id) => {
                        return <div className="Example" key={id}>
                            <p className="Example__word">"{ example.word }"</p>
                            <p className="Example__translation">"{ example.translation }"</p>
                        </div>
                    })
                }
            </div>
        </div>
    )

    return (
        <div className="Box">
            <div className="Box__title">
                <span>{ capitalize( word_type ) } - </span>
                <span className="Box__title--word">{  words  }</span>
            </div>

            { synonyms.length > 0 ? synonymsRender : null }

            { examples.length > 0 ? examplesRender : null }

        </div>
    )
}

export default Box;