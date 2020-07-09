var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var commentSchema = new Schema({
  comment: { type: String, required: true },
  tags: { type: String, required: true },
  postid: { type: Schema.Types.ObjectId, ref: 'Post' }

});

var Comment = mongoose.model('Comment', commentSchema);

module.exports = Comment;

