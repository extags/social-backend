class UserService {
  constructor({ keycloakProvider, userRepository }) {
    this.kcClient = keycloakProvider.kcClient;
    this.userRepository = userRepository;
  }

  async getUser(userId) {
    const user = await this.kcClient.users.findOne({ id: userId });
    return user;
  }

  async createUser(params) {
    // todo: depara dos campos recebidos na requisão para o body que é enviado para o keycloak
    const payload = {
      username: params.nickname,
      email: params.email,
      firstName: params.fullname,
      lastName: params.nickname,
      credentials: [{
        value: params.password,
      }],
      enabled: true,
    };
    const user = await this.userRepository.create(payload);
    this.kcClient.users.create({
      ...payload,
      attributes: {
        userId: user.id,
      },
    });
    return user;
  }

  async updateUser(userId, params) {
    // todo: depara dos campos recebidos na requisão para o body que é enviado para o keycloak
    const user = await this.kcClient.users.update(
      { id: userId },
      {
        firstName: params.nickname,
        lastName: params.fullname,
      },
    );
    return user;
  }

  async deleteUser(userId) {
    const user = await this.kcClient.users.del({ id: userId });
    return user;
  }
}

module.exports = UserService;
