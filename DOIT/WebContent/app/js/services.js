'use strict';

/* Services */


// Demonstrate how to register services
// In this case it is a simple value service.

var module = angular.module('huPortalApp.services', []).
  value('version', '0.1');

module.service('ProjectListJSONService',function (){
	
	var projectList =  [

	                         			{			
	                         				"projectId" : "1",
	                         				"projectName" : "Responsive Web",
	                         				"description" : "done using boot strap",
	                         				"coordinators" : ["shiva","sampath","sayeesh","ravi","masroor"]

	                         			},

	                         			{
	                         				"projectId" : "2",
	                         				"projectName" : "Angular JS",
	                         				"description" : "done using angular js ",
	                         				"coordinators" : ["shiva","sampath","sayeesh","ravi","masroor"]

	                         			}

	                              	];
	this.list = function () {
		return projectList;
	};
	
});