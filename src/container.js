const awilix = require('awilix');

const container = awilix.createContainer();

const { Validator } = require('jsonschema');
const md5File = require('md5-file');
const config = require('../config');
const Server = require('./gateways/http/Server');
const Router = require('./gateways/http/Router');
const Logger = require('./infra/logger/Winston');
const Application = require('./app/Application');
const MongoProvider = require('./infra/providers/MongoProvider');
const KeycloakProvider = require('./infra/providers/KeycloakProvider');
const RequestError = require('./infra/exceptions/RequestError');
const PostModel = require('./infra/database/models/PostModel');

container
  .register({
    config: awilix.asValue(config),
    server: awilix.asClass(Server).singleton(),
    router: awilix.asFunction(Router).singleton(),
    application: awilix.asClass(Application).singleton(),
    logger: awilix.asFunction(Logger).singleton(),
    mongoProvider: awilix.asClass(MongoProvider).singleton(),
    keycloakProvider: awilix.asClass(KeycloakProvider).singleton(),
    validator: awilix.asClass(Validator).singleton(),
    md5File: awilix.asValue(md5File),
    RequestError: awilix.asValue(RequestError),
    container: awilix.asValue(container),
    postModel: awilix.asFunction(PostModel).singleton(),
  })
  .loadModules(
    [
      'src/app/operations/*.js',
      'src/app/operations/**/*.js',
      'src/gateways/http/middleware/*.js',
      'src/gateways/http/controllers/*.js',
    ],
    {
      formatName: 'camelCase',
      resolverOptions: {
        injectionMode: awilix.InjectionMode.PROXY,
      },
    },
  )
  .loadModules(
    [
      'src/gateways/http/schemas/*.js',
    ],
    {
      formatName: 'camelCase',
      register: awilix.asFunction,
    },
  )
  .loadModules(
    [
      'src/app/services/*.js',
      'src/infra/repositories/*.js',
    ],
    {
      formatName: 'camelCase',
      register: awilix.asClass,
      lifetime: awilix.Lifetime.SINGLETON,
    },
  );

module.exports = container;
