'use strict';

/**
 * @ngdoc overview
 * @name expmanageApp
 * @description
 * # expmanageApp
 *
 * Main module of the application.
 */
angular
  .module('expmanageApp', [
    'ngAnimate',
    'ngCookies',
    'ngMessages',
    'ngResource',
    'ngRoute',
    'ngSanitize',
    'ngTouch'
  ])
  .config(function ($routeProvider) {
    $routeProvider
      .when('/', {
        templateUrl: 'views/main.html',
        controller: 'MainCtrl',
        controllerAs: 'main'
      })
      .when('/addExpense', {
        templateUrl: 'views/addExpense.html',
        controller: 'addExpenseCtrl',
        controllerAs: 'addExpense'
      })
      .when('/viewSummary', {
        templateUrl: 'views/viewSummary.html',
        controller: 'viewSummaryCtrl',
        controllerAs: 'viewSummary'
      })
      .otherwise({
        redirectTo: '/'
      });
  });
