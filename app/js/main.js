require.config({
  baseUrl: 'js/',

  // alias libraries paths.  Must set 'angular'
  paths: {
    'angular': 'lib/angular',
    'angular-route': 'lib/angular-route',
    'angularAMD': 'lib/angularAMD',
    'ngload': 'ext/ngload',
    'angular-resource': 'ext/angular-resource'
  },

  // Add angular modules that does not support AMD out of the box, put it in a shim
  shim: {
    'angular-route': [ 'angular' ],
    'angularAMD': [ 'angular' ],
    'ngload': [ 'angularAMD' ],
    'angular-resource': [ 'angular' ],
    'angular-ui-router': [ 'angular' ]
  },

  // kick start application
  deps: ['app']
});