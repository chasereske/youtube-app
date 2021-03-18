const mongoose = require("mongoose");
const { replySchema } = require("./reply");
const Joi = require("joi");

const commentSchemma = new mongoose.Schema({
  text: { type: String, required: true, minlength: 2, maxlength: 300 },
  likes: { type: Number, default: 0 },
  dislikes: { type: Number, default: 0 },
  replies: { type: [replySchema] },
  date: { type: Date, default: Date.now },
});

const Comment = mongoose.model("Comment", commentSchemma);

exports.commentSchemma = commentSchemma;
exports.Comment = Comment;
