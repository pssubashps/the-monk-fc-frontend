/**
 * http://usejsdoc.org/
 */
myapp.controller('serviceController', [ '$scope', 'serviceFactory',
		function($scope, serviceFactory) {
			$scope.gridOptions = {};
			serviceFactory.getAllServices().then(function(response) {

				console.log(response.data.data.service_details);
				$scope.myData = response.data.data.service_details;
				$scope.gridOptions = {

					data : $scope.myData,
					columnDefs : [ {
						name : 'id',

						displayName : 'ID',
						cellEditableCondition : true,

					}, {
						name : 'service_name',

						displayName : 'Name',
						cellEditableCondition : true,

					} ]
				};

			});

		} ]);