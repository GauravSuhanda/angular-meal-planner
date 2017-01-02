'use strict';

/**
 * @ngdoc function
 * @name mealplannerApp.controller:OrderCtrl
 * @description
 * # OrderCtrl
 * Controller of the mealplannerApp
 */
angular.module('mealplannerApp')
.controller('OrderCtrl', function (ordermanager) {
  this.active = ordermanager.getSelectedDay();

  this.setActiveDay = function(day) {
    this.active = day;
    ordermanager.setActiveDay(day);
  };

  this.remove = function(day, menuCategory) {
    ordermanager.removeMenuOption(day, menuCategory);
  };

  this.list = ordermanager.getOrders();
});
