const mongoose = require("mongoose");

mongoose
.connect(`${config.get("MONGODB_URI")}/ecommerce`)
.then(()=>{
    dbgr("connet")
})
.catch((err)=>{
    dbgr(err);
})

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
