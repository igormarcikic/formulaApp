module app.DriversDetails {
    interface IDriversDetailsInfo {
        driverId: string;
        driversDetails: app.ddetails.IDriversDetails[] [];
    }

    class DriversDetailsInfo implements IDriversDetailsInfo {
        driverId: string;
        driversDetails: app.ddetails.IDriversDetails[] [];

        static $inject = ['dataAccessService', '$routeParams'];
        constructor(private dataAccessService: app.common.DataAccessService, $routeParams) {
            const year = JSON.parse(localStorage.getItem('Year'));
            this.driversDetails= [];
            this.driverId = $routeParams.driverId;

            const productResourcePromise: any = this.dataAccessService.getDriversDetails(year, this.driverId);
            productResourcePromise.then(result => {
                const data = result.data.MRData.StandingsTable.StandingsLists[0].DriverStandings;
                this.driversDetails= data;

            });                     
        }
    }
    angular
        .module('formulaApp')
        .controller('DriversDetails',
            DriversDetailsInfo);
}
