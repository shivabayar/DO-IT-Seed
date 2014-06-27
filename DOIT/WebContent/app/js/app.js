'use strict';


// Declare app level module which depends on filters, and services

var huPortalApp =  angular.module(	'huPortalApp', [
  									'ngRoute',
  									'huPortalApp.filters',
  									'huPortalApp.services',
  									'huPortalApp.directives',
									'ui.bootstrap',
  									'huPortalApp.controllers'
									]);


huPortalApp.config(['$routeProvider', 

	function($routeProvider) {

  		$routeProvider.
		when('/projects', {

  			templateUrl: 'partials/project-list.html', 
  			controller: 'projectListController'
  		}).
		when('/projects/:projectId',{
			templateUrl: 'partials/project-details.html',
			controller: 'projectDetailsController'
		}).
		otherwise({
			redirectTo: '/projects'
		})
		;

	}]);

	angular.module('huPortalApp').constant('appSettings', {
  	AppURI: 'http://127.0.0.1:9080/'
  });
