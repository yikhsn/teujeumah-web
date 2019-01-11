import React from 'react';
import './Box.css';

const Box = (props) => {
    return (
        <div className="Box">
            <div className="Box__title">Definitions of</div>

            <div className="Box__sub">
                <div className="Box__sub--title">Articles</div>
                <div className="Box__content">
                    <p>used when referring to someone or something for the first time in a text or conversation.</p>
                    <p>used when referring to someone or something for the first time in a text or conversation.</p>
                    <p>used when referring to someone or something for the first time in a text or conversation.</p>
                </div>
            </div>

            <div className="Box__sub">
                <div className="Box__sub--title">Suffix </div>
                <div className="Box__content">
                    <p>used when first time conversation.</p>
                    <p>used when first time conversation.</p>
                    <p>used when first time conversation.</p>
                </div>
            </div>

            <div className="Box__sub">
                <div className="Box__sub--title">Prefix</div>
                <div className="Box__content">
                    <p>a text or conversation.</p>
                    <p> the first time in conversation.</p>
                    <p> the first time in conversation.</p>
                </div>
            </div>
        </div>
    )
}

export default Box;