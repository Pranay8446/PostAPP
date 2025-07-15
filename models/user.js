const mongoose = require("mongoose");

mongoose
  .connect(`${process.env.MONGO_URI}/postapp`)
  .then(() => {
    console.log("MongoDB connected");
  })
  .catch((err) => {
    console.error("MongoDB connection error:", err);
  });

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
