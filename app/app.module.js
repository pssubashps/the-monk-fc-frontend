'use strict';
var myapp = angular.module("myapp",['ngRoute','ui.grid','ui.grid.selection', 'ui.grid.edit','ui.grid.cellNav','ngResource','ui.bootstrap']);
myapp.config(['$httpProvider', function($httpProvider) {
        $httpProvider.defaults.useXDomain = true;
        delete $httpProvider.defaults.headers.common['X-Requested-With'];
    }
]);
myapp.constant('BASE_URL','https://themonkfc.phptipsntricks.com/index.php/');