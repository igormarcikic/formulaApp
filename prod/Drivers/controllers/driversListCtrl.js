var app;
(function (app) {
    var DriversList;
    (function (DriversList_1) {
        var DriversList = /** @class */ (function () {
            function DriversList(dataAccessService) {
                this.dataAccessService = dataAccessService;
                this.title = ' ';
                this.driversList = [];
                this.reload = function reload(year) {
                    var _this = this;
                    var productResourcePromise = this.dataAccessService.getDriverResource(year);
                    productResourcePromise.then(function (result) {
                        var season = result.data.MRData.StandingsTable.season;
                        _this.title = 'Drivers Championship Standings ' + season;
                        var data = result.data.MRData.StandingsTable.StandingsLists[0].DriverStandings;
                        _this.driversList = data;
                        localStorage.setItem('Year', JSON.stringify(year));
                    });
                };
                this.reload(2013);
            }
            DriversList.$inject = ['dataAccessService'];
            return DriversList;
        }());
        angular
            .module('formulaApp')
            .controller('DriversList', DriversList);
    })(DriversList = app.DriversList || (app.DriversList = {}));
})(app || (app = {}));
