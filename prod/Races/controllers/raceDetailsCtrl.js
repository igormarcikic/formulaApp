var app;
(function (app) {
    var RaceDetails;
    (function (RaceDetails_1) {
        var RaceDetails = /** @class */ (function () {
            function RaceDetails(dataAccessService, $routeParams) {
                var _this = this;
                this.dataAccessService = dataAccessService;
                this.allRaces = [];
                this.allQ = [];
                this.grandPrix = [];
                this.allRaces = [];
                this.allQ = [];
                var year = JSON.parse(localStorage.getItem('Year'));
                var productResourcePromise = this.dataAccessService.getRaceResource(year);
                productResourcePromise.then(function (result) {
                    var data = result.data.MRData.RaceTable.Races;
                    _this.grandPrix = data;
                });
                this.id = $routeParams.round;
                var all = this.dataAccessService.getAllByYear(year, this.id);
                all.then(function (result) {
                    var data = result.data.MRData.RaceTable.Races[0];
                    _this.allRaces = data;
                });
                var allq = this.dataAccessService.getQByYear(year, this.id);
                allq.then(function (result) {
                    var data = result.data.MRData.RaceTable.Races[0];
                    _this.allQ = data;
                    console.log(_this.allQ);
                });
            }
            RaceDetails.$inject = ['dataAccessService', '$routeParams'];
            return RaceDetails;
        }());
        angular
            .module('formulaApp')
            .controller('RaceDetails', RaceDetails);
    })(RaceDetails = app.RaceDetails || (app.RaceDetails = {}));
})(app || (app = {}));
