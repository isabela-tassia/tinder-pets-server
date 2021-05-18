const mongoose = require("mongoose");
const PostSchema = mongoose.Schema({
  title: { type: String, required: true, trim: true },
  codname: { type: String, required: true, trim: true },
  date: { type: String, required: true, maxlength: 7, minlength: 7 },
  body: { type: String, maxlength: 500 },
  share: { 
    image: { type: Image },
    video: { type: String },
    link: { type: String},
   },
  like: { type: Number},
  comment: { type: String},
  reshare: { type: Number, default: 0,},  
});
module.exports = mongoose.Schema('Post', PostSchema)