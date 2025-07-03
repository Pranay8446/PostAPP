const mongoose = require("mongoose");

mongoose.connect("mongodb://127.0.0.1:27017/miniapp");

const userSchema = mongoose.Schema({
    username : String,
    password : String,
    age : Number,
    email : String,
    name : String,
    posts : [
        {type : mongoose.Schema.Types.ObjectId, ref : "post"}
    ]
});

module.exports = mongoose.model("user",userSchema);