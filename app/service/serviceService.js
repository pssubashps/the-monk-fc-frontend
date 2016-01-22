/**
 * http://usejsdoc.org/
 */
myapp.factory('serviceFactory', function($http,$q) {
	return {
		getAllServices : function() {
			 var deferred = $q.defer();
			 $http({
				method : 'GET',
				url : '/campaignplus-fe/jsondata/GET-servicedetails.json'
			}).then(function successCallback(response) {
				//console.log(response);
				 deferred.resolve(response);
			}, function errorCallback(response) {
				console.log(response);
				 deferred.reject(response);
			});
			 return deferred.promise;
			
		},
		sayGoodbye : function() {
			return "Factory says \"Goodbye " + text + "\"";
		}
	}
});