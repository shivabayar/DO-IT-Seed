'use strict';

/* Services */


// Demonstrate how to register services
// In this case it is a simple value service.

var module = angular.module('huPortalApp.services', []).
  value('version', '0.1');

