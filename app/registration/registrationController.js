/**
 * http://usejsdoc.org/
 */
myapp.controller('registrationController', function($scope) {
   $scope.validationFlag = false;
	$scope.register =  function () {
		$scope.validationFlag = true;
	   //return false;
   }
});