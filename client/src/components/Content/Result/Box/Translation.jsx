import React from 'react';
import './Translation.css';
import capitalize from '../../../../helpers/capitalize_each_word';

const Translation = (props) => {

    let translationsRender = [];

    const { translations, words } = props;

    translationsRender = (
        <div className="Translation__content">
            {
                translations.map( ( cur, id ) =>
                    <div className="Translation__content" key={id}>
                        <p className="Translation__content--type">  { capitalize(cur.word_type )} </p>
                        {
                            cur.translation.map(
                                ( el, i ) => 
                                    <p className="Translation__content--word"
                                        key={ i } >
                                            { el }
                                    </p>
                            )
                        }
                    </div>
                )
            }
        </div>
    )

    
    if (translations.length > 0)

        return (
            <div className="Translation">
                <div className="Translation__title">
                    <span> Terjemahan dari - </span>
                    <span> { words } </span>
                </div>

                { translationsRender }

            </div>
        )

    else return null;
}

export default Translation;