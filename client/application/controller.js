
'use strict';

define([
  './module'
], function (module) {
  return module.
    controller(module.name + 'Ctrl', [
      '$scope',
      '$location',
      '$route',
      function ($scope, $location, $route) {
        // Cache service references
        $scope.$location = $location
        $scope.$route = $route

        // Set component properties
        $scope.name = module.name
        $scope.id = module.name
      }
    ])
})
