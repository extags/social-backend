class AuthService {
  constructor({ keycloakProvider, config }) {
    this.config = config;
    this.kcClient = keycloakProvider.kcClient;
  }

  async login(params) {
    const { clientId, clientSecret } = this.config.keycloak;
    await this.kcClient.auth({
      ...params,
      clientSecret,
      clientId,
    });
    return {
      access_token: this.kcClient.accessToken,
      refresh_token: this.kcClient.refreshToken,
    };
  }
}

module.exports = AuthService;
