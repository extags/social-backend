const { Schema } = require('mongoose');

module.exports = ({ mongoProvider: { mongoose } }) => {
  const LikeModel = new Schema({
    post: String,
    user: String,
  },
  { timestamps: true });
  const Like = mongoose.models.Like || mongoose.model('LikeModel', LikeModel);
  return Like;
};
