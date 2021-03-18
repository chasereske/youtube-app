const mongoose = require("mongoose");
const { commentSchema } = require("./comment");
const Joi = require("joi");

const videoSchema = new mongoose.Schema({
  videoId: { type: String, required: true },
  comments: { type: [commentSchema] },
});

const Video = mongoose.model("Video", videoSchema);

exports.videoSchema = videoSchema;
exports.Video = Video;
