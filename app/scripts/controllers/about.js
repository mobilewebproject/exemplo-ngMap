'use strict';

/**
 * @ngdoc function
 * @name mapsApp.controller:AboutCtrl
 * @description
 * # AboutCtrl
 * Controller of the mapsApp
 */
angular.module('mapsApp')
  .controller('AboutCtrl', function ($scope) {
    $scope.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];
  });
