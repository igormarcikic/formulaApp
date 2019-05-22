var app;
(function (app) {
    var common;
    (function (common) {
        var DataAccessService = /** @class */ (function () {
            function DataAccessService($http) {
                this.$http = $http;
            }
            DataAccessService.prototype.getTeamResource = function (year) {
                return this.$http({
                    method: 'JSONP',
                    url: 'http://ergast.com/api/f1/' + year + '/constructorStandings.json?callback=JSON_CALLBACK'
                });
            };
            DataAccessService.prototype.getTeamInfo = function (year, constructorId) {
                return this.$http({
                    method: 'JSONP',
                    url: 'http://ergast.com/api/f1/' + year + '/constructors/' + constructorId + '/results.json?callback=JSON_CALLBACK'
                });
            };
            DataAccessService.prototype.getRaceResource = function (year) {
                return this.$http({
                    method: 'JSONP',
                    url: 'http://ergast.com/api/f1/' + year + '/results/1.json?callback=JSON_CALLBACK'
                });
            };
            DataAccessService.prototype.getDriverResource = function (year) {
                return this.$http({
                    method: 'JSONP',
                    url: 'http://ergast.com/api/f1/' + year + '/driverStandings.json?callback=JSON_CALLBACK'
                });
            };
            DataAccessService.prototype.getDriversDetails = function (year, driverId) {
                return this.$http({
                    method: 'JSONP',
                    url: 'http://ergast.com/api/f1/' + year + '/drivers/' + driverId + '/driverStandings.json?callback=JSON_CALLBACK'
                });
            };
            DataAccessService.prototype.getDriversRaces = function (year, driverId) {
                return this.$http({
                    method: 'JSONP',
                    url: 'http://ergast.com/api/f1/' + year + '/drivers/' + driverId + '/results.json?callback=JSON_CALLBACK'
                });
            };
            DataAccessService.prototype.getAllByYear = function (year, id) {
                return this.$http({
                    method: 'JSONP',
                    url: 'http://ergast.com/api/f1/' + year + '/' + id + '/results.json?callback=JSON_CALLBACK'
                });
            };
            DataAccessService.prototype.getQByYear = function (year, id) {
                return this.$http({
                    method: 'JSONP',
                    url: 'http://ergast.com/api/f1/' + year + '/' + id + '/qualifying.json?callback=JSON_CALLBACK'
                });
            };
            DataAccessService.$inject = ['$http'];
            return DataAccessService;
        }());
        common.DataAccessService = DataAccessService;
        angular
            .module('common.services')
            .service('dataAccessService', DataAccessService);
    })(common = app.common || (app.common = {}));
})(app || (app = {}));
