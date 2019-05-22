var app;
(function (app) {
    var DriversDetails;
    (function (DriversDetails) {
        var DriversDetailsInfo = /** @class */ (function () {
            function DriversDetailsInfo(dataAccessService, $routeParams) {
                var _this = this;
                this.dataAccessService = dataAccessService;
                var year = JSON.parse(localStorage.getItem('Year'));
                this.driversDetails = [];
                this.driverId = $routeParams.driverId;
                var productResourcePromise = this.dataAccessService.getDriversDetails(year, this.driverId);
                productResourcePromise.then(function (result) {
                    var data = result.data.MRData.StandingsTable.StandingsLists[0].DriverStandings;
                    _this.driversDetails = data;
                });
            }
            DriversDetailsInfo.$inject = ['dataAccessService', '$routeParams'];
            return DriversDetailsInfo;
        }());
        angular
            .module('formulaApp')
            .controller('DriversDetails', DriversDetailsInfo);
    })(DriversDetails = app.DriversDetails || (app.DriversDetails = {}));
})(app || (app = {}));
