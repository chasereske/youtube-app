const mongoose = require("mongoose");
const Joi = require("joi");

const replySchema = new mongoose.Schema({
  text: { type: String, Required: true, minlength: 2, maxlength: 150 },
  date: { type: Date, default: Date.now },
});

const Reply = mongoose.model("Reply", replySchema);

function validateReply(reply) {
  const schema = Joi.object({
    text: Joi.string().required().min(2).max(150),
    date: Joi.date().default(Date.now),
  });
  schema.validate(reply);
}

exports.replySchema = replySchema;
exports.Reply = Reply;
exports.validateReply = validateReply;
