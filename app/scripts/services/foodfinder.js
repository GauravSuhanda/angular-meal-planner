'use strict';

/**
 * @ngdoc service
 * @name mealplannerApp.foodfinder
 * @description
 * # foodfinder
 * Service in the mealplannerApp.
 */
angular.module('mealplannerApp')
  .service('foodfinder', function () {

    this.getMenu=function(){
      return $.get('/menu/menu.json');
    }
    this.getItem=function(id){
      var menuItemFile = '/menu/' + id + '.json';
      return $.get( menuItemFile );
    }
  });
