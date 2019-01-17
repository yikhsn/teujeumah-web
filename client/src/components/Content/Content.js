import React, { Component } from 'react';
import axios from 'axios';
import './Content.css';
import Box from './Box/Box';
import Result from './Result/Result';

class Content extends Component {
    state = {
        words: '',
        translation: '',
        type: []
    }

    getData = (query) => {
        axios.get('http://localhost:3001/api/words/search/text/' + query )
            .then( data => {
                const result = data.data;
                
                this.setState({ type: result });

                this.getTranslation();
            })
            .catch(error => {              
                this.setState( { type: [] } );

                this.getTranslation();
            });
    }

    getTranslation = () => {  
        if ( this.state.type.length > 0) {
            let arrayTranslation = this.state.type[0];

            let mainTranslation = arrayTranslation.translations[0];

            this.setState({ translation: mainTranslation });
        }

        else this.setState( { translation: ''} );
    }

    inputChangedHandler = (e) => {
        const { value } = e.target
        
        this.setState({
            words: value
        });

        this.getData(value);
    }

    render() {
        return (
            <div className="Content">
                <Box 
                    data = { this.state }
                    inputChanged = { this.inputChangedHandler }
                />
                <Result 
                    data = { this.state }
                />
            </div>
        )
    }
}

export default Content;