myapp.factory("smsRestService",['$resource','BASE_URL', function ($resource,BASE_URL) {
    return $resource(
    		BASE_URL+"/:Id",
        {Id: "@Id" },
        {
            "read":   {method: "GET", headers: {'Content-Type': 'application/json'}},
            "update": {method: "PUT", headers: {'Content-Type': 'application/json'}},
            "create": {method:'POST', headers: {'Content-Type': 'application/json'}},
            "delete": {method:'DELETE'}
        }
    );
}]);
