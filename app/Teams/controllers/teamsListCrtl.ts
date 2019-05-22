module app.TeamList {
    interface ITeamsList {
        title: string;
        constructorId: string;
        driver: string;
        constructorDetails: app.teams.ITeam[];
        constructorsList: app.teams.ITeam[];
        reload(year: number);
    }

    class TeamList implements ITeamsList {
        title: string;
        constructorId: string;
        driver: string;
        constructorDetails: app.teams.ITeam[];
        constructorsList: app.teams.ITeam[];
        reload(year: number);

        static $inject = ['dataAccessService', '$routeParams', '$route'];
        constructor(private dataAccessService: app.common.DataAccessService, $routeParams) {
            this.title = '';
            this.constructorsList = [];
            this.reload = function reload(year) {
                const productResourcePromise: any = this.dataAccessService.getTeamResource(year);
                productResourcePromise.then(result => {
                    const season = result.data.MRData.StandingsTable.season;
                    this.title = 'Teams Championship Standings ' + season;
                    const data = result.data.MRData.StandingsTable.StandingsLists[0].ConstructorStandings;
                    this.constructorsList = data;
                    localStorage.setItem('Year', JSON.stringify(year));
                });
            };
            this.reload(2013);
        }
    }
    angular
        .module('formulaApp')
        .controller('TeamList',
            TeamList);
}
