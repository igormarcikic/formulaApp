module app.DriversList {
    interface IDriversList {
        title:string;
        driversList: app.drivers.IDrivers[];
        reload(year: number);
    }

    class DriversList implements IDriversList {
        title:string;
        driversList: app.drivers.IDrivers[];
        reload(year: number);

        static $inject = ['dataAccessService'];
        constructor(private dataAccessService: app.common.DataAccessService) {
            this.title = ' ';
            this.driversList= [];

            this.reload = function reload(year) {
            const productResourcePromise: any = this.dataAccessService.getDriverResource(year);
            productResourcePromise.then(result => {
                const season = result.data.MRData.StandingsTable.season;
                this.title = 'Drivers Championship Standings ' + season;
                const data = result.data.MRData.StandingsTable.StandingsLists[0].DriverStandings;
                this.driversList= data;
                localStorage.setItem('Year', JSON.stringify(year));
            });  
        };
        this.reload(2013);         
        }
    }
    angular
        .module('formulaApp')
        .controller('DriversList',
            DriversList);
}
