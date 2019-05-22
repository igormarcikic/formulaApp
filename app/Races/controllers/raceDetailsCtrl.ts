module app.RaceDetails {
    interface IRaceDetails {
        round: number;
        title: string;
        season: number;
        circuit: string;
        date: Date;
        winner: string;
        grandPrix: app.results.IResults[];
        id: number;
        reload(year: number);
    }

    class RaceDetails implements IRaceDetails {
        round: number;
        title: string;
        season: number;
        circuit: string;
        date: Date;
        winner: string;
        grandPrix: app.results.IResults[];
        allRaces = [];
        allQ = [];
        id: number;
        reload(year: number);

        static $inject = ['dataAccessService', '$routeParams'];
        constructor(private dataAccessService: app.common.DataAccessService, $routeParams) {
            this.grandPrix = [];
            this.allRaces = [];
            this.allQ = [];
            const year = JSON.parse(localStorage.getItem('Year'));

            const productResourcePromise: any = this.dataAccessService.getRaceResource(year);
            productResourcePromise.then(result => {
                const data = result.data.MRData.RaceTable.Races;
                this.grandPrix = data;
            });

            this.id = $routeParams.round;
            const all: any = this.dataAccessService.getAllByYear(year, this.id);
            all.then(result => {
                const data = result.data.MRData.RaceTable.Races[0];
                this.allRaces = data;
            });

            const allq: any = this.dataAccessService.getQByYear(year, this.id);
            allq.then(result => {
                const data = result.data.MRData.RaceTable.Races[0];
                this.allQ = data;
                console.log(this.allQ);
                
            });
        }
    }
    angular
        .module('formulaApp')
        .controller('RaceDetails',
            RaceDetails);
}
