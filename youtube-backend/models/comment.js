const mongoose = require('mongoose');
const Joi = require('joi');

const commentSchemma = new mongoose.Schema({
    text: { type: String, required: true, minlength: 2, maxlength: 300 },
    likes: { type: Number, default: 0 },
    dislikes: { type: Number, default: 0 },
    replies: {},
    videoId: { type: String, required: true },
    date: { type: Date, default: Date.now }
})

const Comment = mongoose.model('Comment', commentSchemma);

module.exports = Comment; 