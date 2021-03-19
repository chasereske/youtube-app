const { Comment } = require("../models/comment");
const express = require("express");
const router = express.Router();

// POST COMMENTS
router.post("/", async (req, res) => {
  try {
    const comment = new Comment({
      text: req.body.text,
    });

    await comment.save();

    return res.send(comment);
  } catch (error) {
    return res.status(500).send(error);
  }
});

module.exports = router;
