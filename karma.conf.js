var path = require('path');
var webpackConfig = require('./webpack.config');
var entry = path.resolve(webpackConfig.entry.bundle);
var preprocessors = {};
preprocessors[entry] = ['webpack', 'sourcemap'];

module.exports = function(config) {
  config.set({
      // start these browsers
      // available browser launchers: https://npmjs.org/browse/keyword/karma-launcher
      browsers: ['PhantomJS'],

      // frameworks to use
      // available frameworks: https://npmjs.org/browse/keyword/karma-adapter
      frameworks: ['mocha', 'chai-jquery', 'jquery-2.1.0', 'sinon-chai'],

      // test results reporter to use
      // possible values: 'dots', 'progress'
      // available reporters: https://npmjs.org/browse/keyword/karma-reporter
      reporters: ['mocha', 'coverage'],

      coverageReporter : {
          dir: 'build/reports/web-coverage',
          reporters: [
              {type: 'lcov', subdir: '.'},
              {type: 'json', subdir: '.'},
              {type: 'text-summary'}
          ]
      },

      // level of logging
      // possible values: config.LOG_DISABLE || config.LOG_ERROR || config.LOG_WARN || config.LOG_INFO || config.LOG_DEBUG
      logLevel: config.LOG_INFO,

      // enable / disable watching file and executing tests whenever any file changes
      autoWatch: true,

      // Continuous Integration mode
      // if true, Karma captures browsers, runs the tests and exits
      singleRun: true,

      // enable / disable colors in the output (reporters and logs)
      colors: true,

      // web server port
      port: 9876,

      // base path that will be used to resolve all patterns (eg. files, exclude)
      basePath: '',

      // list of files / patterns to load in the browser
      files: [entry],

      // list of files to exclude
      exclude: [],
      webpack : webpackConfig,

      // preprocess matching files before serving them to the browser
      // available preprocessors: https://npmjs.org/browse/keyword/karma-preprocessor
      preprocessors: preprocessors,

      // Concurrency level
      // how many browser should be started simultaneous
      concurrency: Infinity,

      webpackMiddleware: {noInfo: true},

      // omit plugins to allow automatic inclusion
      // plugins :[]
  })
}
