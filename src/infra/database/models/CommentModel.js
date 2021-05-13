const { Schema } = require('mongoose');

module.exports = ({ mongoProvider: { mongoose } }) => {
  const CommentModel = new Schema({
    post: { type: mongoose.Schema.Types.ObjectId, ref: 'Post' },
    user: String,
    content: String,
  },
  { timestamps: true });
  const Comment = mongoose.models.Comment || mongoose.model('CommentModel', CommentModel);
  return Comment;
};
