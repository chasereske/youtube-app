const connectDB = require("./startup/db");
const express = require("express");
const app = express();
const comments = require("./routes/comments");
const replies = require("./routes/replies");
const videos = require("./routes/videos");
const cors = require("cors");

connectDB();

app.use(cors());
app.use(express.json());
app.use("/api/comments", comments);
app.use("/api/replies", replies);
app.use("/api/videos", videos);

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server started on port: ${PORT}`);
});
