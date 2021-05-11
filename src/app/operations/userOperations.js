module.exports = ({ userService }) => ({
  create: async (params) => {
    const user = await userService.createUser(params);
    return user;
  },

  get: async (userId) => {
    const user = userService.getUser(userId);
    return user;
  },

  update: async (userId, params) => {
    const user = userService.updateUser(userId, params);
    return user;
  },

  delete: async (userId) => {
    const user = userService.deleteUser(userId);
    return user;
  },
});
