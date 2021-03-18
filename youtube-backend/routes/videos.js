const { Video } = require("../models/video");
const express = require("express");
const router = express.Router();

router.post("/", async (req, res) => {
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

router.get("/", async (req, res) => {
  try {
    const video = await Video.find();

    return res.send(video);
  } catch (error) {
    res.status(500).send(error);
  }
});

module.exports = router;
