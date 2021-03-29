const mongoose = require("mongoose");
const { replySchema } = require("./reply");
const Joi = require("joi");

const commentSchema = new mongoose.Schema({
  text: { type: String, required: true, minlength: 2, maxlength: 300 },
  likes: { type: Number, default: 0 },
  dislikes: { type: Number, default: 0 },
  replies: { type: [replySchema], default: [] },
  date: { type: Date, default: Date.now },
});

const Comment = mongoose.model("Comment", commentSchema);

function validateComment(comment) {
  const schema = Joi.object({
    text: Joi.string().required().min(2).max(300),
    likes: Joi.number().default(0),
    dislikes: Joi.number().default(0),
    date: Joi.date().default(Date.now),
  });
  return schema.validate(comment);
}

exports.commentSchema = commentSchema;
exports.Comment = Comment;
exports.validateComment = validateComment;
