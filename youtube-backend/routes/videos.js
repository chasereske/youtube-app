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

    // RETURN COMMENTS ARRAY FROM VIDEO OBJECT
    return res.send(video.comments);
  } catch (error) {
    res.status(500).send(error);
  }
});

// POST COMMENT TO SELECTED VIDEO
router.post("/:videoId", async (req, res) => {
  try {
    // CHECK IF VIDEO INFO EXISTS IN DATABASE
    const videoId = req.params.videoId;
    const videoArr = await Video.find({ videoId: videoId });
    let [video] = videoArr;

    // IF VIDEO DOES NOT EXIST IN DB, CREATE ONE
    if (!video) {
      video = new Video({
        videoId: videoId,
      });
      await video.save();
    }

    // CREATE COMMENT
    const comment = new Comment({
      text: req.body.text,
    });

    // ADD COMMENT TO VIDEO
    await comment.save();

    video.comments.push(comment);
    await video.save();
    return res.send(`Video: ${video}`);
  } catch (error) {
    res.status(500).send(error);
  }
});

module.exports = router;
