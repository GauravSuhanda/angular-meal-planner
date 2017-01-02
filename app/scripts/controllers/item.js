'use strict';

/**
 * @ngdoc function
 * @name mealplannerApp.controller:ItemCtrl
 * @description
 * # ItemCtrl
 * Controller of the mealplannerApp
 */
angular.module('mealplannerApp')
  .controller('ItemCtrl', function ($stateParams,foodfinder) {
    var _this = this;
    foodfinder.getItem($stateParams.id).then(function(data) {
      _this.data = data;
    });
  });
