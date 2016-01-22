/**
 * http://usejsdoc.org/
 */
myapp.controller('smsController', [ '$scope', 'smsRestService',
		function($scope, smsRestService) {
			$scope.sendMessage = function() {

				smsRestService.create({
					subject : $scope.subject,
					message : $scope.message
				});
			}

		} ]);