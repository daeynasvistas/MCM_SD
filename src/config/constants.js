const devConfig = {
  MONGO_URL: 'mongodb://admin:Trancoso-6210@ds151292.mlab.com:51292/myplaces',
  JWT_SECRET: 'supersecreto',
};

const testConfig = {
  MONGO_URL: 'mongodb://admin:Trancoso-6210@ds151292.mlab.com:51292/myplaces',
};

const prodConfig = {
  MONGO_URL: 'mongodb://admin:Trancoso-6210@ds151292.mlab.com:51292/myplaces',
};

const defaultConfig = {
  PORT: process.env.PORT || 3000,
};

function envConfig(env) {
  switch (env) {
    case 'development':
      return devConfig;
    case 'test':
      return testConfig;
    default:
      return prodConfig;
  }
}

export default {
  ...defaultConfig,
  ...envConfig(process.env.NODE_ENV),
};
