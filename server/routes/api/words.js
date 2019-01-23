const mongoose = require('mongoose');
const express = require('express');
const router = express.Router();

// define schema for the database
const wordSchema = new mongoose.Schema({
    words: { type: String, required: true },
    word_type: { type: String, required: true },

    // sometimes there more than one translation, store it in an array
    translations: { type: Array, required: true },
    synonyms: { type: Array },
    examples: { type: Array }
});

// define index for the existing schema
wordSchema.index({words: 'text'});

// create model with the 'Words' collection
// and the wordSchema was defined before
const Word = mongoose.model('Word', wordSchema);

// all routes
router.get('/', async(req, res) => {
    const word = await Word.find();
    res.send(word);
});

router.post('/', async(req, res) => {
    let word = new Word({
        words: req.body.words,
        word_type: req.body.word_type,
        translations: req.body.translations,
        synonyms: req.body.synonyms,
        examples: req.body.examples
    });

    try {
        word = await word.save();
        console.log(word);
    } catch (error) {
        console.log(error.message);
    }

    res.send(word);
});

router.put('/:id', (req, res) => {
    const word = Word.findByIdAndUpdate(req.params.id, {
        words: req.body.words,
        word_type: req.body.word_type,
        translations: req.body.translations,
        synonyms: req.body.synonyms,
        examples: req.body.examples
    },{
        new: true
    });

    if (!word.length) return res.status(404).send('The given ID not found');

    res.send(genre);
});

router.delete('/:id', async(req, res) => {
    const word = await Word.findByIdAndRemove(req.params.id);

    if(!word.length) return res.status(404).send('The given ID not found');

    res.send(word);
});

router.get('/:id', async(req, res) => {
    const word = await Word.findById(req.params.id);

    if(!word.length) return res.status(404).send('The given ID not Found');

    res.send(word);
});

router.get('/search/:query', async(req, res) => {
    let word;

    try {
        word = await Word.find({ 
            words: req.params.query
            // $text: { 
            //     $search : req.params.query
            // } 
        });
    } catch (error) {
        console.log(error);
    }

    if(!word.length) return res.status(404).send('The given word not found');

    res.send(word);
});

router.get('/search/text/:query', async(req, res) => {
    const q = req.params.query;
    
    const word = await Word.find( { 
        "words": {
            "$regex": new RegExp(q, 'i')
        } 
    }).limit(5);


    if (!word.length) return res.status(404).send('The given query not found');

    res.send(word)
});

module.exports = router;