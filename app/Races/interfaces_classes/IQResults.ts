module app.qresults {
    export interface IQResults {
        position: number;
        driver: string;
        team: string;
        bestTime: number;
    }

    export class Qresults implements IQResults {
        position: number;
        driver: string;
        team: string;
        bestTime: number;
    }
}
