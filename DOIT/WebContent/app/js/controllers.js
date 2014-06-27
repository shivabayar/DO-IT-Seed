'use strict';

/* Controllers */

angular.module('huPortalApp.controllers', [])
  .controller('projectListController', ['$scope', function($scope) {
     $scope.message = "Hello This message is from Project List";
  }])
  .controller('projectDetailsController', ['$scope', function($scope) {
    $scope.message = "Hello This message is from Project Details";
  }]);
