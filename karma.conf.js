// Karma configuration

var babelify = require('babelify').configure({
  auxiliaryCommentBefore: 'istanbul ignore next',
  loose: 'all'
});

var istanbul = require('browserify-babel-istanbul')({
  ignore: ['**/node_modules/**', '**/test/**']
});


module.exports = function(config) {
  config.set({
    browsers: ['PhantomJS'],
    files: ['test/*.js'],
    frameworks: ['browserify', 'chai', 'mocha'],
    preprocessors: {'test/*.js': ['browserify']},

    reporters: ['progress', 'coverage', 'coveralls'],
    coverageReporter: {type: 'lcov'},

    browserify: {
      debug: true,
      transform: [babelify, istanbul]
    }
  })
}
