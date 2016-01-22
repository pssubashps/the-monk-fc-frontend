'use strict';
var myapp = angular.module("myapp",['ngRoute','ui.grid','ui.grid.selection', 'ui.grid.edit','ui.grid.cellNav','ngResource']);
myapp.constant('BASE_URL','http://localhost-flight-rest');