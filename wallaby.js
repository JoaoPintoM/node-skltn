module.exports = function (wallaby) { // eslint-disable-line func-names
  return {
    files: [
      '.env',
      'src/**/*.js',
    ],
    tests: [
      'test/**/*.test.js',
    ],
    compilers: {
      '**/*.js': wallaby.compilers.babel(),
    },
    testFramework: 'tape',
    env: {
      type: 'node',
      runner: 'node',
    },
  };
};
