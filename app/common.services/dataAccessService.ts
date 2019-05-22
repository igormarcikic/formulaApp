module app.common {
    interface IDataAccessService {
        getTeamResource(year: number): app.teams.ITeam[];
        getTeamInfo(year: number, constructorId: string): app.teams.ITeam[];

        getRaceResource(year: number): app.results.IResults[];getDriverResource(year: number): app.drivers.Drivers[];
        getDriversDetails(year: number, driverId: string ): app.ddetails.IDriversDetails[] ;
        getDriversRaces(year: number, driverId: string ): app.dRaces.IDriversRaces[] ;
    
        getAllByYear(year: number, id: number);
        getQByYear(year: number, id: number);
    }

    export class DataAccessService implements IDataAccessService {

        static $inject = ['$http'];
        constructor(private $http) {

        }

        getTeamResource(year: number): app.teams.ITeam[] {
            return this.$http({
                method: 'JSONP',
                url: 'http://ergast.com/api/f1/' + year + '/constructorStandings.json?callback=JSON_CALLBACK'
            });
        }

        getTeamInfo(year: number, constructorId: string): app.teams.ITeam[] {
            return this.$http({
                method: 'JSONP',
                url: 'http://ergast.com/api/f1/' + year + '/constructors/' + constructorId + '/results.json?callback=JSON_CALLBACK'
            });
        }

        getRaceResource(year: number): app.results.IResults[] {
            return this.$http({
                method: 'JSONP',
                url: 'http://ergast.com/api/f1/' + year + '/results/1.json?callback=JSON_CALLBACK'
            });
        }

        getDriverResource(year: number): app.drivers.Drivers[] {
            return this.$http({
                method: 'JSONP',
                url: 'http://ergast.com/api/f1/' + year + '/driverStandings.json?callback=JSON_CALLBACK'
            });
       
        }
        getDriversDetails(year: number, driverId: string ): app.ddetails.IDriversDetails[] {
            return this.$http({
                method: 'JSONP',
                url:  'http://ergast.com/api/f1/' + year + '/drivers/' + driverId + '/driverStandings.json?callback=JSON_CALLBACK'
            });
        }
        getDriversRaces(year: number, driverId: string ): app.dRaces.IDriversRaces[] {
            return this.$http({
                method: 'JSONP',
                url:  'http://ergast.com/api/f1/' + year + '/drivers/' + driverId + '/results.json?callback=JSON_CALLBACK'
            });
        }

        getAllByYear(year: number, id: number) {
            return this.$http({
                method: 'JSONP',
                url: 'http://ergast.com/api/f1/' + year + '/' + id + '/results.json?callback=JSON_CALLBACK'
            });
        }

        getQByYear(year: number, id: number) {
            return this.$http({
                method: 'JSONP',
                url: 'http://ergast.com/api/f1/' + year + '/' + id + '/qualifying.json?callback=JSON_CALLBACK'
            });
        }


    }
    angular
        .module('common.services')
        .service('dataAccessService',
            DataAccessService);
}
