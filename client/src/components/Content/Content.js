import React, { Component } from 'react';
import axios from '../../axios';
import './Content.css';
import Box from './Box/Box';
import Result from './Result/Result';

class Content extends Component {
    state = {
        words: '',
        translation: [],
        type: []
    }

    // this function will used to get translation and all words atribute 
    // if user input just one word
    getData = (query) => {
        axios.get(query )
            .then( data => {
                const result = data.data;
                
                this.setState({ type: result });

                this.setTranslation();
            })
            .catch(error => {

                this.setState( { type: [] } );

                this.setTranslation();
            });
    }

    // this funnction will be called if user input more than one word
    // check and by space. each word will be split by space and each
    // word would check their translations 
    getDataMutiple =  (data) => {
        let queries = data.split(' ').map( cur => cur.trim() );
        
        for (let query of queries) {
            
            // checking if the query (array element) ain't an empty string
            if (query){

                // run get the translation of the current query (arraay element)
                this.getTranslation(query).then( (data) => {

                    // get the current state
                    const translation = this.state.translation;

                    // push the data to current state
                    translation.push(data);

                    // set new state with the current element
                    this.setState({ translation });

                }).catch(err => {
                    console.log('there is an error')
                })
            }            
        }

    }

    // this function use as function that would do translation task
    // if the user input more than word on input column
    getTranslation = (query) => {
        return axios.get(query)
            .then( data => {
                if (data.data.length > 0)
                    return data.data[0].translations[0];
                else
                    return query;
            })
            .catch(error => {
                return query;
            });
    }


    // this function will see bunch of 'translation' array property in 'type' state
    // from the backend, this function will set one 'translation' from that data
    // as the main function the current 'words' data on the state  
    setTranslation = () => { 

        if ( this.state.type.length > 0) {
            let arrayTranslation = this.state.type[0];

            let mainTranslation = arrayTranslation.translations[0];

            this.setState({ translation: [ mainTranslation ] });
        }

        else this.setState( { translation: [] } );
    }

    inputChangedHandler = (e) => {
        let { value } = e.target

        value = value.trim();
        
        // cheking if there is user input, not a space or blank input
        if ( value ) {
            this.setState({ words: value });
            
            // checking if user input more than one word
            // system will translate this input one by one word
            if (value.includes(' ')) {

                this.setState({ type: [], translation: [] }); 

                this.getDataMutiple( value );
            }

            // if the input just one input, system will only this one word
            // with it all 'word' data atribut if they have
            else this.getData(value);
        
        }
        
        // if there is no user input, except just blank space
        // delete all the state have been set before
        // we did this because currently backend cant check and send '404'
        // message if there is no data find and send empty array (should fix later)
        else this.setState( { type: [], translation: [], words: '' } )
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