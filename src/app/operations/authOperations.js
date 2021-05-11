module.exports = ({ authService }) => ({
  login: async (params) => {
    const response = await authService.login({
      username: params.email,
      password: params.password,
      grantType: 'password',
    });
    return response;
  },

  refresh: async (refreshToken) => {
    const response = await authService.login({
      refreshToken,
      grantType: 'refresh_token',
    });
    return response;
  },
});
