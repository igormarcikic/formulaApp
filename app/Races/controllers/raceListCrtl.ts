module app.RaceList {
    interface IRaceList {
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

    class RaceList implements IRaceList {
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

            this.reload = function reload(year) {
                const productResourcePromise: any = this.dataAccessService.getRaceResource(year);
                productResourcePromise.then(result => {
                    const data = result.data.MRData.RaceTable.Races;
                    this.grandPrix = data;
                    localStorage.setItem('Year', JSON.stringify(year));
                    console.log(this.grandPrix);
                    
                });
            };
            this.reload(2013);
        }
    }
    angular
        .module('formulaApp')
        .controller('RaceList',
            RaceList);
}
