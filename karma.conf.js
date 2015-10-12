var babelify = require('babelify')
var isparta = require('isparta')
var istanbul = require('browserify-istanbul')({instrumenter: isparta})

module.exports = function(config) {
  config.set({
    browsers: ['PhantomJS'],
    browserify: {debug: true, transform: [babelify]},
    files: ['test/*.js'],
    frameworks: ['browserify', 'chai', 'mocha'],
    preprocessors: {'test/*.js': ['browserify']}
  })

  if (process.env.npm_config_coverage) config.set({
    browserify: {debug: true, transform: [istanbul, babelify]},
    coverageReporter: {type: 'lcov'},
    reporters: ['progress', 'coverage', 'coveralls']
  })
}
