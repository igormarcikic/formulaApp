var app;
(function (app) {
    var TeamDetails;
    (function (TeamDetails_1) {
        var TeamDetails = /** @class */ (function () {
            function TeamDetails(dataAccessService, $routeParams) {
                var _this = this;
                this.dataAccessService = dataAccessService;
                var year = JSON.parse(localStorage.getItem('Year'));
                var productResourcePromise = this.dataAccessService.getTeamResource(year);
                productResourcePromise.then(function (result) {
                    var season = result.data.MRData.StandingsTable.season;
                    _this.title = 'Team Championship Standings ' + season;
                    var data = result.data.MRData.StandingsTable.StandingsLists[0].ConstructorStandings;
                    _this.constructorsList = data;
                    localStorage.setItem('Year', JSON.stringify(year));
                });
                this.constructorId = $routeParams.constructorId;
                var teamDetailsPromise = this.dataAccessService.getTeamInfo(year, this.constructorId);
                teamDetailsPromise.then(function (result) {
                    _this.constructorDetails = result.data.MRData.RaceTable.Races;
                    console.log(_this.constructorDetails);
                });
            }
            TeamDetails.$inject = ['dataAccessService', '$routeParams', '$route'];
            return TeamDetails;
        }());
        angular
            .module('formulaApp')
            .controller('TeamDetails', TeamDetails);
    })(TeamDetails = app.TeamDetails || (app.TeamDetails = {}));
})(app || (app = {}));
