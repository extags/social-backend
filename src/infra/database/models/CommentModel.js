const { Schema } = require('mongoose');

module.exports = ({ mongoProvider: { mongoose } }) => {
  const CommentModel = new Schema({
    post: String,
    user: String,
    content: String,
  });
  const Comment = mongoose.models.Comment || mongoose.model('CommentModel', CommentModel);
  return Comment;
};
