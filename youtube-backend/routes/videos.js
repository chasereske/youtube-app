const { Video } = require("../models/video");
const { Comment, validateComment } = require("../models/comment");
const { Reply, validateReply } = require("../models/reply");
const express = require("express");
const router = express.Router();

// GET COMMENTS (with likes, disliikes and replies) ASSOCIATED WITH SPECIFIC VIDEO
router.get("/:videoId", async (req, res) => {
  try {
    // CHECK IF VIDEO INFO EXISTS IN DATABASE
    const videoId = req.params.videoId;
    const [video] = await Video.find({ videoId: videoId });

    if (!video) return res.status(400).send("Not Found");

    // DESTRUCTURE THE SINGLE OBJECT FROM RETURNED ARRAY
    //const [video] = videoArr;

    // RETURN COMMENTS ARRAY FROM VIDEO OBJECT
    return res.send(video);
    // return res.send(video.comments);
  } catch (error) {
    res.status(500).send(error);
  }
});

// POST COMMENT TO SELECTED VIDEO
router.post("/:videoId", async (req, res) => {
  try {
    // CHECK IF VIDEO INFO EXISTS IN DATABASE
    const videoId = req.params.videoId;
    let [video] = await Video.find({ videoId: videoId });
    //let [video] = videoArr;

    // IF VIDEO DOES NOT EXIST IN DB, CREATE ONE
    if (!video) {
      video = new Video({
        videoId: videoId,
      });
      await video.save();
    }

    const { error } = validateComment(req.body);

    if (error) return res.status(400).send(error);

    // CREATE COMMENT
    const comment = new Comment({
      text: req.body.text,
    });

    // ADD COMMENT TO VIDEO
    //await comment.save();

    video.comments.push(comment);
    await video.save();
    return res.send(`Video: ${video}`);
  } catch (error) {
    res.status(500).send(error);
  }
});

// POST REPLY TO SPECIFIC COMMENT ON SELECTED VIDEO
router.post("/:videoId/comments/:commentId/replies", async (req, res) => {
  try {
    // CHECK IF VIDEO INFO EXISTS IN DATABASE
    const videoId = req.params.videoId;

    const [video] = await Video.find({ videoId: videoId });
    //const [video] = videoArr;

    const commentId = req.params.commentId;
    const comment = video.comments.id(commentId);

    const { error } = validateReply(req.body);

    if (error) return res.status(400).send(error);

    // CREATE REPLY
    const reply = new Reply({
      text: req.body.text,
    });

    // ADD COMMENT TO VIDEO
    //await comment.save();

    comment.replies.push(reply);
    await video.save();
    return res.send(video.comments);
  } catch (error) {
    res.status(500).send(`Error: ${error}`);
  }
});

// LIKE COMMENT
router.put("/:videoId/like-comments/:commentId", async (req, res) => {
  try {
    // CHECK IF VIDEO INFO EXISTS IN DATABASE
    const videoId = req.params.videoId;
    //const video = await Video.findById(videoId);
    const [video] = await Video.find({ videoId: videoId });
    //const [video] = videoArr;

    const commentId = req.params.commentId;
    const comment = video.comments.id(commentId);
    // video.comments.update(
    //   { "comments.id": req.params.commentId },
    //   { $set: { "video.comments.$.likes": 1 } }
    // );

    comment.likes += 1;

    // comment.likes = req.body.likes;
    await video.save();

    return res.send(comment);
  } catch (error) {
    res.status(500).send(`Error: ${error}`);
  }
});

// DISLIKE COMMENT
router.put("/:videoId/dislike-comments/:commentId", async (req, res) => {
  try {
    // CHECK IF VIDEO INFO EXISTS IN DATABASE
    const videoId = req.params.videoId;
    //const video = await Video.findById(videoId);
    const [video] = await Video.find({ videoId: videoId });
    //const [video] = videoArr;

    const commentId = req.params.commentId;
    const comment = video.comments.id(commentId);
    // video.comments.update(
    //   { "comments.id": req.params.commentId },
    //   { $set: { "video.comments.$.likes": 1 } }
    // );

    comment.dislikes += 1;

    // comment.likes = req.body.likes;
    await video.save();

    return res.send(comment);
  } catch (error) {
    res.status(500).send(`Error: ${error}`);
  }
});

module.exports = router;
