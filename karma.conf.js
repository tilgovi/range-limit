// Karma configuration

var istanbul = require('browserify-istanbul');
var isparta = require('isparta');

module.exports = function(config) {
  config.set({
    browsers: ['PhantomJS'],
    files: ['test/*.js'],
    frameworks: ['browserify', 'chai', 'mocha'],
    preprocessors: {'test/*.js': ['browserify']},
    reporters: ['progress', 'coverage'],
    browserify: {
      debug: true,
      transform: [
        ['babelify', {loose: 'all'}],
        istanbul({
          instrumenter: isparta,
          ignore: ['**/node_modules/**', '**/test/**']
        })
      ]
    }
  })
}
