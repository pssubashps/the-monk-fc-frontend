myapp.controller('TimerController', function($scope,$timeout) {
	$scope.clock = "loading clock..."; // initialise the time variable
	$scope.tickInterval = 1000 //ms

	function displayClock() {

		// Start the timer
		$timeout(tick, $scope.tickInterval);
	}

	var tick = function() {
		$scope.clock = Date.now() // get the current time
		$timeout(tick, $scope.tickInterval); // reset the timer
	}

	displayClock();

});