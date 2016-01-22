/**
 * http://usejsdoc.org/
 */
myapp.controller('smsController', 
		function($scope, smsRestService,$uibModal) {
			$scope.sendMessage = function() {
				 var modalInstance = $uibModal.open({
				      animation: $scope.animationsEnabled,
				      templateUrl: 'myModalContent.html',
				      controller: 'smsController',
				      //size: size,
				     /* resolve: {
				        items: function () {
				          return $scope.items;
				        }
				      }*/
				    });

				/*smsRestService.create({
					subject : $scope.subject,
					message : $scope.message
				});*/
			}

		} );