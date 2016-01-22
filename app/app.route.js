/**
 * http://usejsdoc.org/
 */
//var myapp = angular.module("myapp",['ngRoute']);
myapp.config(['$routeProvider',
  function($routeProvider,$stateProvider) {
    $routeProvider.
    when('/', {
        templateUrl: 'app/registration/registration.html',
        controller: 'registrationController'
      }).
      when('/register', {
    	  templateUrl: 'app/registration/registration.html',
          controller: 'registrationController'
      }).
      when('/service', {
    	  templateUrl: 'app/service/service.html',
          controller: 'serviceController'
      }).
      when('/sms', {
    	  templateUrl: 'app/sms/sms.html',
          controller: 'smsController'
      }).
      otherwise({
        redirectTo: '/register'
      });
  }]);
