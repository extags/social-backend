const { Schema } = require('mongoose');

module.exports = ({ mongoProvider: { mongoose } }) => {
  const PostModel = new Schema({
    title: String,
    content: String,
    user: { type: Schema.Types.ObjectId, ref: 'user' },
    thumbnail: String,
  },
  { timestamps: true });
  const Post = mongoose.models.User || mongoose.model('PostModel', PostModel);
  return Post;
};
