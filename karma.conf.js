// Karma configuration

var babelify = require('babelify');
var isparta = require('isparta');
var istanbul = require('browserify-istanbul')({
  ignore: ['**/node_modules/**', '**/test/**'],
  instrumenter: isparta
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
      transform: [istanbul, babelify]
    }
  })
}
