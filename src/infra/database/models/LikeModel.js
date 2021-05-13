const { Schema } = require('mongoose');

module.exports = ({ mongoProvider: { mongoose } }) => {
  const LikeModel = new Schema({
    post: { type: mongoose.Schema.Types.ObjectId, ref: 'Post' },
    user: String,
  },
  { timestamps: true });
  const Like = mongoose.models.Like || mongoose.model('LikeModel', LikeModel);
  return Like;
};
