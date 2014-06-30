'use strict';

/* Controllers */

angular.module('huPortalApp.controllers', [])
  .controller('projectListController', ['$scope', function($scope) {
     $scope.message = "Hello This message is from Project List";

     $scope.projects = [

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
  }])
  .controller('projectDetailsController', ['$scope','$routeParams',  function($scope,$routeParams) {

  	// $scope.projId = $routeParams.projectId;
  	// console.log($scope.projId);

    $scope.message = "Hello This message is from Project Details";

    $scope.projects = [

    		{
    			"projectId" : "1",
				"projectName" : "Responsive Web",
				"description" : "done using boot strap",
				"coordinators" : ["shiva","sampath","sayeesh","ravi"],
				"tasks" : 	[
								{
									"taskName" : "Create index page",
									"taskDescription" : "Create a home page for the project",
									"priority" : "0",
									"assignedTo" : "shiva",
									"dueDate" : 	"29/06/2014",
									"createdOn" : "27/06/2014",
									"status":"pending"
								},

								{
									"taskName" : "Improve UI & UX",
									"taskDescription" : "Create more pleasing UI",
									"priority" : "2",
									"assignedTo" : "sampath",
									"dueDate" : "01/07/2014",
									"createdOn" : "27/06/2014",
									"status":"completed"
								},
								{
									"taskName" : "Create index page",
									"taskDescription" : "Create a home page for the project",
									"priority" : "0",
									"assignedTo" : "shiva",
									"dueDate" : 	"29/06/2014",
									"createdOn" : "27/06/2014",
									"status":"pending"
								},
								{
									"taskName" : "Create index page",
									"taskDescription" : "Create a home page for the project",
									"priority" : "0",
									"assignedTo" : "shiva",
									"dueDate" : 	"29/06/2014",
									"createdOn" : "27/06/2014",
									"status":"pending"
								}
							]

    		},
    		{
    			"projectId" : "2",
				"projectName" : "Angular JS",
				"description" : "done using Angular js",
				"coordinators" : ["shiva","sampath","sayeesh","ravi","masroor"],
				"tasks" : 	[
								{
									"taskName" : "Create controllers",
									"taskDescription" : "Create a home page for the project",
									"priority" : "1",
									"assignedTo" : "shiva",
									"dueDate" : 	"29/06/2014",
									"createdOn" : "27/06/2014",
									"status":"closed"
								},

								{
									"taskName" : "Improve UI & UX",
									"taskDescription" : "Create more pleasing UI",
									"priority" : "3",
									"assignedTo" : "sampath",
									"dueDate" : "01/07/2014",
									"createdOn" : "27/06/2014",
									"status":"pending"
								}
							]

    		}

    	];


    // finding the json by the id which I got from the url
    for(var i=0 ; i < $scope.projects.length; ++i)
    {
    	if($scope.projects[i].projectId == $routeParams.projectId)
    	{
    		$scope.projectDetails = $scope.projects[i];
    		// console.log($scope.projectDetails);
    	}
    }

  }]);
