const { Schema } = require('mongoose');

module.exports = ({ mongoProvider: { mongoose } }) => {
  const LikeModel = new Schema({
    _id: {
      post: { type: mongoose.Schema.Types.ObjectId, ref: 'Post' },
      user: { type: mongoose.Schema.Types.ObjectId, ref: 'User' },
    },
  },
  { timestamps: true });
  const Like = mongoose.models.Like || mongoose.model('LikeModel', LikeModel);
  return Like;
};
