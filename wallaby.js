module.exports = function (wallaby) { // eslint-disable-line func-names
  return {
    files: [
      { pattern: '.env', instrument: false },
      'src/**/*.js',
    ],
    tests: [
      'test/**/*.test.js',
    ],
    compilers: {
      '**/*.js': wallaby.compilers.babel(),
    },
    env: {
      type: 'node',
      params: {
        env: 'NODE_ENV=test',
      },
    },
    setup: function setup() {
      require('dotenv').config(); // eslint-disable-line global-require
    },
  };
};
