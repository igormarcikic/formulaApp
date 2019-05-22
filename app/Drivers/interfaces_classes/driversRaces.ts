module app.dRaces {
    export interface IDriversRaces {
        round:number;
        raceName: string;
        team: string;
        grid: number;
        position:number; 

    }
    export class DriversRaces implements IDriversRaces {
        round: number;        
        raceName: string;
        team: string;
        grid: number;
        position: number;


    }

}