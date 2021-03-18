const mongoose = require("mongoose");
const Joi = require("joi");

const replySchema = new mongoose.Schema({
  text: { type: String, Required: true, minlength: 2, maxlength: 300 },
  date: { type: Date, default: Date.now },
});

const Reply = mongoose.model("Reply", replySchema);

exports.replySchema = replySchema;
exports.Reply = Reply;
