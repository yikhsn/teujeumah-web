import React, { Component } from 'react';
import axios from '../../axios';

import StyledContent from './StyledContent';

import Box from './Box/Box';
import Result from './Result/Result';

class Content extends Component {
    state = {
        words: '',
        translation: [],
        type: []
    }

    initialState = {
        words: '',
        translation: [],
        type: []
    }

    setWords = (words) => this.setState({words});

    setAllData = (data) => this.setState({ type: data });

    setTranslation = (data) => { 
        const translation = this.state.translation;

        if ( Array.isArray(data) ) {
            translation.push(data[0].translations[0]);
            this.setState({ translation });
        }
        else {
            translation.push(data);            
            this.setState( {translation} );
        }
    }

    // this function will used to get translation and all words atribute 
    // if user input just one word
    getData = (query) => {
        return axios.get(query)
            .then( data => {
                return data.data;
            }).catch(err => {
                return query;
            });
    }

    // function will be called if user input more than one word
    getDataMutiple =  (data) => {

        // split word user input into singular word and add it to an array
        const queries = data.split(' ').map( query => query.trim() );

        // loop each word in the array to get the the translation 1 by 1
        for (let query of queries){

            // get the translation of each word user input
            this.getData(query)
                .then(data => this.setTranslation(data) )
                .catch(err => console.log('error when try to get data'));
        }
    }

    // function to clear all data in state when user click button clear input
    inputClearedHandler = () => this.setState(this.initialState);

    // main function, who will see all user input to do things base on that input
    inputChangedHandler = (e) => {
        const { value } = e.target;
        const text = value.trim();

        // cheking if there is user input, not a space or blank input
        if ( text ) {

            // set the words that user input to state, fully like user input
            // not the text was trimed
            this.setWords(value);
            
            // checking if user input more than one word
            // system will translate this input one by one word
            if (text.includes(' ')) {
                this.setState({ type: [], translation: [] }); 

                this.getDataMutiple( text );
            }

            // if user only input one word
            else {
                // get all data by user input
                this.getData(text).then((data) => {
                    
                    this.setState({ type: [], translation: [] });

                    // if there is a respon from the request, set the respon to state
                    if (Array.isArray(data)) this.setAllData(data);

                    // set translation by data system get
                    this.setTranslation(data);
                });
            } 
        }
        
        // if there is no user input, except just blank space
        // delete all the state have been set before
        else this.setState(this.initialState)
    }

    render() {
        return (
            <StyledContent>
                <Box 
                    data={this.state}
                    inputChanged={this.inputChangedHandler}
                    inputCleared={this.inputClearedHandler}
                />
                <Result 
                    data={this.state}
                />
            </StyledContent>
        )
    }
}

export default Content;