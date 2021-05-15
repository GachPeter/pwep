const mongoose = require("mongoose");

const MSchemes = mongoose.Schema({
    name: { type: String, default: "No name" },
    email: { type: String, default: "No email" },
    phone:{ type: String, default: "No phone" },
    subject: { type: String, default: "No subject" },
    message: { type: String, default: "No message" },
    time:String
});

const Message = mongoose.model("Message", MSchemes);

module.exports = Message;