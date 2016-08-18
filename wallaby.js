module.exports = function (wallaby) { // eslint-disable-line func-names
  return {
    files: [
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
    },
  };
};
