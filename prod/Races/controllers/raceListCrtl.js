var app;
(function (app) {
    var RaceList;
    (function (RaceList_1) {
        var RaceList = /** @class */ (function () {
            function RaceList(dataAccessService, $routeParams) {
                this.dataAccessService = dataAccessService;
                this.allRaces = [];
                this.allQ = [];
                this.grandPrix = [];
                this.allRaces = [];
                this.allQ = [];
                this.reload = function reload(year) {
                    var _this = this;
                    var productResourcePromise = this.dataAccessService.getRaceResource(year);
                    productResourcePromise.then(function (result) {
                        var data = result.data.MRData.RaceTable.Races;
                        _this.grandPrix = data;
                        localStorage.setItem('Year', JSON.stringify(year));
                        console.log(_this.grandPrix);
                    });
                };
                this.reload(2013);
            }
            RaceList.$inject = ['dataAccessService', '$routeParams'];
            return RaceList;
        }());
        angular
            .module('formulaApp')
            .controller('RaceList', RaceList);
    })(RaceList = app.RaceList || (app.RaceList = {}));
})(app || (app = {}));
