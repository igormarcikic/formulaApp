var app;
(function (app) {
    var DriversRaces;
    (function (DriversRaces_1) {
        var DriversRaces = /** @class */ (function () {
            function DriversRaces(dataAccessService, $routeParams) {
                var _this = this;
                this.dataAccessService = dataAccessService;
                this.title = " ";
                this.driverId = $routeParams.driverId;
                this.driversRaces = [];
                var productResourcePromise = this.dataAccessService.getDriversRaces(2013, this.driverId);
                productResourcePromise.then(function (result) {
                    var season = result.data.MRData.RaceTable.season;
                    _this.title = 'Formula 1 ' + season + ' Results';
                    var data = result.data.MRData.RaceTable.Races;
                    _this.driversRaces = data;
                });
            }
            DriversRaces.$inject = ['dataAccessService', '$routeParams'];
            return DriversRaces;
        }());
        angular
            .module('formulaApp')
            .controller('DriversRaces', DriversRaces);
    })(DriversRaces = app.DriversRaces || (app.DriversRaces = {}));
})(app || (app = {}));
