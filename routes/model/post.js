const mongoose = require("mongoose");

const PScheme = mongoose.Schema({
    title: String,
    time: String,
    img: String,
    content: { type: String, default: "nothing" },
    category: String,
    show: { type: String, default: 'off' }
});

const Post = mongoose.model("Post", PScheme);

module.exports = Post;