// Post.model.js
import mongoose from 'mongoose';
const postSchema = new mongoose.Schema({
   username: {
       type: String,
       required: true
   },
   schedule: {
       type: String
   },
});

const Post = mongoose.model("Post", postSchema);
export default Post;