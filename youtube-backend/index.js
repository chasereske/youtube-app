const connectDB = require('./startup/db');

connectDB();

const replySchemma = new mongoose.Schema({
    text: { type: String, Required: true, minlength: 2, maxlength: 300 },
    likes: { type: Number, default: 0 },
    dislikes: { type: Number, default: 0 },
    date: { type: Date, default: Date.now }
})

const commentSchemma = new mongoose.Schema({
    text: { type: String, required: true, minlength: 2, maxlength: 300 },
    likes: { type: Number, default: 0 },
    dislikes: { type: Number, default: 0 },
    replies: {},
    videoId: { type: String, required: true },
    date: { type: Date, default: Date.now }
})

const Comment = mongoose.model('Comment', commentSchemma);
const Reply = mongoose.model('Reply', replySchemma);
//create replySchema