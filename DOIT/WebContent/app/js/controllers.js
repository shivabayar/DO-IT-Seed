'use strict';

/* Controllers */

angular.module('huPortalApp.controllers', [])
  .controller('projectListController', ['$scope','$modal','$log','ProjectListJSONService', function($scope,$modal,$log,ProjectListJSONService) {
     $scope.message = "Hello This message is from Project List";

     $scope.projects = ProjectListJSONService.list(); 
//     $scope.projects = [
//
//			{			
//				"projectId" : "1",
//				"projectName" : "Responsive Web",
//				"description" : "done using boot strap",
//				"coordinators" : ["shiva","sampath","sayeesh","ravi","masroor"]
//
//			},
//
//			{
//				"projectId" : "2",
//				"projectName" : "Angular JS",
//				"description" : "done using angular js ",
//				"coordinators" : ["shiva","sampath","sayeesh","ravi","masroor"]
//
//			}
//
//     	];
     
     $scope.open = function (size) {

         var modalInstance = $modal.open({
           templateUrl: 'createProjectModal',
           controller: ModalInstanceCtrl,
           size: size,
           resolve: {
             projects: function () {
               return $scope.projects;
             }
           }
         });

         modalInstance.result.then(function (selectedItem) {
           $scope.projects.push(selectedItem);
         }, function () {
         });
           $log.info('Modal dismissed at: ' + new Date());
       };
     

     // Please note that $modalInstance represents a modal window (instance) dependency.
     // It is not the same as the $modal service used above.

     var ModalInstanceCtrl = function ($scope, $modalInstance, projects) {
      
       $scope.newProject = {};
       $scope.ok = function () {
          
    	   $modalInstance.close({'projectId':$scope.newProject.projectId,'projectName':$scope.newProject.projectName,'description':$scope.newProject.description,
    		   'coordinators':[$scope.newProject.coordinators]});
       };

       $scope.cancel = function () {
         $modalInstance.dismiss('cancel');
   	  };
     };
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
