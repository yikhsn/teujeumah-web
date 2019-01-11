const mongoose = require('mongoose');
const express = require('express');
const router = express.Router();

// define schema for the database
const wordSchema = new mongoose.Schema({
    word: { type: String, required: true },
    wordType: { type: String, required: true },
    wordExample: { type: String }
});

// define index for the existing schema
wordSchema.index({ word: 'text' });

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
        word: req.body.word,
        wordType: req.body.wordType,
        wordExample: req.body.wordExample
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
        word: req.body.word,
        wordType: req.body.wordType,
        wordExample: req.body.wordExample
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
    const word = await Word.find( { $text : { $search : req.params.query } } );

    if(!word.length) return res.status(404).send('The given word not found');

    res.send(word);
});

router.get('/search/text/:query', async(req, res) => {
    const q = req.params.query;

    const word = await Word.find( { 
        "word": {
            "$regex": new RegExp(q, 'i')
        } 
    }).limit(10);

    const type = typeof(word);

    console.log(word.length);

    if (!word.length) return res.status(404).send('The given query not found');

    res.send(word)
});

module.exports = router;