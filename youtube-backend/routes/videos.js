const { Video } = require("../models/video");
const { Comment } = require("../models/comment");
const Reply = require("../models/reply");
const express = require("express");
const router = express.Router();

// GET COMMENTS ASSOCIATED WITH SPECIFIC VIDEO
router.get("/:videoId", async (req, res) => {
  try {
    const videoId = req.params.videoId;
    const video = await Video.find({ videoId: videoId });

    return res.send(video);
  } catch (error) {
    res.status(500).send(error);
  }
});

// POST COMMENT TO SELECTED VIDEO
router.post("/:videoId", async (req, res) => {
  try {
    const video = new Video({
      videoId: req.body.videoId,
    });

    await video.save();

    return res.send(video);
  } catch (error) {
    res.status(500).send(error);
  }
});

module.exports = router;
