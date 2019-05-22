module app.TeamDetails {
    interface ITeamsDetails {
        title: string;
        constructorId: string;
        driver: string;
        constructorDetails: app.teams.ITeam[];
        constructorsList: app.teams.ITeam[];
    }

    class TeamDetails implements ITeamsDetails {
        title: string;
        constructorId: string;
        driver: string;
        constructorDetails: app.teams.ITeam[];
        constructorsList: app.teams.ITeam[];
        class: string;

        static $inject = ['dataAccessService', '$routeParams', '$route'];
        constructor(private dataAccessService: app.common.DataAccessService, $routeParams) {

            const year = JSON.parse(localStorage.getItem('Year'));

            const productResourcePromise: any = this.dataAccessService.getTeamResource(year);
                productResourcePromise.then(result => {
                    const season = result.data.MRData.StandingsTable.season;
                    this.title = 'Team Championship Standings ' + season;
                    const data = result.data.MRData.StandingsTable.StandingsLists[0].ConstructorStandings;
                    this.constructorsList = data;
                    localStorage.setItem('Year', JSON.stringify(year));
                });

            this.constructorId = $routeParams.constructorId;
            const teamDetailsPromise: any = this.dataAccessService.getTeamInfo(year, this.constructorId);
            teamDetailsPromise.then(result => {
                this.constructorDetails = result.data.MRData.RaceTable.Races;
                console.log(this.constructorDetails);
            });
        }
    }
    angular
        .module('formulaApp')
        .controller('TeamDetails',
            TeamDetails);
}
