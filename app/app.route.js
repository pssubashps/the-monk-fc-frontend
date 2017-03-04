/**
 * http://usejsdoc.org/
 */
//var myapp = angular.module("myapp",['ngRoute']);
myapp.config(['$routeProvider',
  function($routeProvider,$stateProvider) {
    $routeProvider.
    when('/', {
        templateUrl: 'app/landing/landing.html',
        controller: 'landingController'
      }).
       
      otherwise({
        redirectTo: '/'
      });
  }]);
