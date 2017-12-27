export const appEnvironmentSchema = {
  id: {
    default: 8080,
    doc: 'The port of the api',
    env: 'APP_ID',
    format: 'port',
  },
  env: {
    default: "development",
    doc: "The applicaton environment.",
    env: "NODE_ENV",
    format: ["production", "development", "test"],
  },
  logLevel:{
    default: '',
    doc: 'The swagger spec path of the api',
    env: 'APP_LOG_LEVEL',
    format: String,
  },
  port: {
    default: 8080,
    doc: 'The port of the api',
    env: 'APP_PORT',
    format: 'port',
  },
  sessionSecret: {
    default: '',
    doc: 'The session secret of the api',
    env: 'APP_SESSION_SECRET',
    format: String,
  },
  swaggerSpecPath:{
    default: '',
    doc: 'The swagger spec path of the api',
    env: 'APP_SWAGGER_SPEC_PATH',
    format: String,
  },
  requestSizeLimit:{
    default: '',
    doc: 'The swagger spec path of the api',
    env: 'APP_REQUEST_SIZE_LIMIT',
    format: String,
  }
}