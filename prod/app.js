var app;
(function (app) {
    var main = angular.module('formulaApp', ['ngRoute', 'common.services']);
    main.config(routeConfig);
    routeConfig.$inject = ['$routeProvider', '$locationProvider'];
    function routeConfig($routeProvider, $locationProvider) {
        $locationProvider.hashPrefix('!');
        $routeProvider
            .when('/teams', {
            templateUrl: '/app/teams/teamsDefault.html',
            controller: 'TeamList as tl'
        })
            .when('/teams/:constructorId', {
            templateUrl: '/app/teams/teamsDetails.html',
            controller: 'TeamDetails as td'
        })
            .when('/races', {
            templateUrl: '/app/races/racesDefault.html',
            controller: 'RaceList as rl'
        })
            .when('/races/:round', {
            templateUrl: '/app/races/racesDetails.html',
            controller: 'RaceDetails as rd'
        })
            .when('/drivers', {
            templateUrl: '/app/drivers/driversDefault.html',
            controller: 'DriversList as dl'
        })
            .when('/drivers/:driverId', {
            templateUrl: '/app/drivers/driversDetails.html'
        })
            .otherwise('/');
    }
})(app || (app = {}));
