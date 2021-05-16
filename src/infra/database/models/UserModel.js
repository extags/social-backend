const { Schema } = require('mongoose');

module.exports = ({ mongoProvider: { mongoose } }) => {
  const UserModel = new Schema({
    name: String,
    email: String,
    username: String,
    fullname: String,
    profileImage: String,
  },
  { timestamps: true });
  const User = mongoose.models.User || mongoose.model('UserModel', UserModel);
  return User;
};
