const KcAdminClient = require('keycloak-admin').default;

class KeycloakProvider {
  constructor({ config }) {
    this.kcClient = new KcAdminClient();
    this.kcClient.setConfig({
      realmName: config.keycloak.realmName,
      baseUrl: config.keycloak.baseUrl,
    });
  }
}

module.exports = KeycloakProvider;
