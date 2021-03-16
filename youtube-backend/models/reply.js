const mongoose = require('mongoose');
const Joi = require('joi');

const replySchemma = new mongoose.Schema({
    text: { type: String, Required: true, minlength: 2, maxlength: 300 },
    likes: { type: Number, default: 0 },
    dislikes: { type: Number, default: 0 },
    date: { type: Date, default: Date.now }
})


const Reply = mongoose.model('Reply', replySchemma);

module.exports = Reply;