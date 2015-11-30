'use strict';

/**
 * @ngdoc overview
 * @name localizeAppApp
 * @description
 * # localizeAppApp
 *
 * Main module of the application.
 */
angular
  .module('localizeAppApp', [
    'ngMessages',
    'ngRoute'
  ])
  .config(function ($routeProvider) {
    $routeProvider
      .when('/', {
        templateUrl: 'views/main.html',
        controller: 'MainCtrl',
        controllerAs: 'main'
      })
      .when('/about', {
        templateUrl: 'views/about.html',
        controller: 'AboutCtrl',
        controllerAs: 'about'
      })
      .otherwise({
        redirectTo: '/'
      });
  });
