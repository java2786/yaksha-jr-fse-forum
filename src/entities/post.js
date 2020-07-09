var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var postSchema = new Schema({
  description: { type: String, required: true },
  title: { type: String, required: true },
  tags: { type: String, required: true }
});

var Post = mongoose.model('Post', postSchema);


module.exports = Post;

