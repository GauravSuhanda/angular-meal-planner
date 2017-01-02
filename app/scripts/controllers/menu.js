'use strict';

/**
 * @ngdoc function
 * @name mealplannerApp.controller:MenuCtrl
 * @description
 * # MenuCtrl
 * Controller of the mealplannerApp
 */
angular.module('mealplannerApp')
  .controller('MenuCtrl', function (foodfinder,ordermanager) {
    var _this = this;
    foodfinder.getMenu().then(
      function(data) {
  _this.items = data;
      }
    );

    this.chooseItem = function(menuCategory, menuItemName) {
      ordermanager.chooseMenuOption(menuCategory, menuItemName);
    };
  });
