'use strict';

/**
 * @ngdoc overview
 * @name mealplannerApp
 * @description
 * # mealplannerApp
 *
 * Main module of the application.
 */
angular
  .module('mealplannerApp', ['ui.router'])
  .config(function($stateProvider,$urlRouterProvider){

  $urlRouterProvider.otherwise('/');

  $stateProvider
  .state('home',{
  		url:'/',
  		templateUrl:'views/menu.html',
  		controller:'MenuCtrl as menu'
  })
  .state('item',{
  		url:'/menu/item/:id',
  		templateUrl:'views/item.html',
  		controller:'ItemCtrl as item'

  })
  .state('item.nutrition',{
  		url:'/nutrition',
  		templateUrl:'views/item-nutrition.html'
  })
  .state('item.reviews',{
  		url:'/reviews',
  		templateUrl:'views/item-review.html'
  })


  });
