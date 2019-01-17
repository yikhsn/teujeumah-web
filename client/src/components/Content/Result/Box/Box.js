import React from 'react';
import './Box.css';

const Box = (props) => {

    let synonymsRender, translationsRender, examplesRender = [];

    const { word_type, synonyms, translations, examples } = props;

    if (synonyms)
        synonymsRender = (
            <div className="Box__sub">
                <div className="Box__sub--title">Synonyms</div>
                <div className="Box__content">
                    {
                        synonyms.map((syn, id) => {
                            return <p key={id}>{syn}</p>
                        })
                    }
                </div>
            </div>
        )

    if (translations)
        translationsRender = (
            <div className="Box__sub">
                <div className="Box__sub--title">Translations</div>
                <div className="Box__content">
                    {
                        translations.map((cur, id) =>
                            <div key={id}>
                                <p>  {cur.word_type} </p>
                                {
                                    cur.translation.map(
                                        (el, i) => <p key={i} >{el}</p>
                                    )
                                }

                            </div>
                        )
                    }
                </div>
            </div>
        )

    if (examples)
        examplesRender = (
            <div className="Box__sub">
                <div className="Box__sub--title">Examples</div>
                <div className="Box__content">
                    {
                        examples.map((example, id) => {
                            return <p key={id}>
                                {example.word} {example.translation}
                            </p>
                        })
                    }
                </div>
            </div>
        )

    return (
        <div className="Box">
            <div className="Box__title">
                {word_type}
            </div>

            { synonymsRender }

            { translationsRender }

            { examplesRender }

        </div>
    )
}

export default Box;