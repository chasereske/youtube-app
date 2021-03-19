const { Video } = require("../models/video");
const { Comment, validateComment } = require("../models/comment");
const { Reply, validateReply } = require("../models/reply");
const express = require("express");
const router = express.Router();

// GET COMMENTS ASSOCIATED WITH SPECIFIC VIDEO
router.get("/:videoId", async (req, res) => {
  try {
    // CHECK IF VIDEO INFO EXISTS IN DATABASE
    const videoId = req.params.videoId;
    const videoArr = await Video.find({ videoId: videoId });

    if (!videoArr) return res.status(400).send("Not Found");

    // DESTRUCTURE THE SINGLE OBJECT FROM RETURNED ARRAY
    const [video] = videoArr;

    return res.send(video.comments);
  } catch (error) {
    res.status(500).send(error);
  }
});

// POST COMMENT TO SELECTED VIDEO
router.post("/:videoId", async (req, res) => {
  try {
    // const videoId = req.params.videoId;
    // const video = await Video.find({ videoId: videoId });

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
