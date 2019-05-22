var app;
(function (app) {
    var TeamList;
    (function (TeamList_1) {
        var TeamList = /** @class */ (function () {
            function TeamList(dataAccessService, $routeParams) {
                this.dataAccessService = dataAccessService;
                this.title = '';
                this.constructorsList = [];
                this.reload = function reload(year) {
                    var _this = this;
                    var productResourcePromise = this.dataAccessService.getTeamResource(year);
                    productResourcePromise.then(function (result) {
                        var season = result.data.MRData.StandingsTable.season;
                        _this.title = 'Teams Championship Standings ' + season;
                        var data = result.data.MRData.StandingsTable.StandingsLists[0].ConstructorStandings;
                        _this.constructorsList = data;
                        localStorage.setItem('Year', JSON.stringify(year));
                    });
                };
                this.reload(2013);
            }
            TeamList.$inject = ['dataAccessService', '$routeParams', '$route'];
            return TeamList;
        }());
        angular
            .module('formulaApp')
            .controller('TeamList', TeamList);
    })(TeamList = app.TeamList || (app.TeamList = {}));
})(app || (app = {}));
