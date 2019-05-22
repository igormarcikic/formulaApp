module app.DriversRaces {
    interface IDriversRaces {
        driverId: string;
        title:string;
        driversRaces: app.dRaces.IDriversRaces[];
    }

    class DriversRaces implements IDriversRaces {
        driverId: string;
        title:string;
        driversRaces: app.dRaces.IDriversRaces[];

        static $inject = ['dataAccessService', '$routeParams'];
        constructor(private dataAccessService: app.common.DataAccessService, $routeParams) {
            this.title= " ";
            this.driverId = $routeParams.driverId;
            this.driversRaces= [];

            const year = JSON.parse(localStorage.getItem('Year'));
            const productResourcePromise: any = this.dataAccessService.getDriversRaces(year, this.driverId);
            productResourcePromise.then(result => {
                const season = result.data.MRData.RaceTable.season;
                this.title = 'Formula 1 ' + season + ' Results';
                const data = result.data.MRData.RaceTable.Races;
                this.driversRaces= data;

            });          
         
        }
    }
    angular
        .module('formulaApp')
        .controller('DriversRaces',
        DriversRaces);
}
