module app.results {
    export interface IResults {
        position: number;
        driver: string;
        team: string;
        qualifyingTime: number;
        raceTime: number;
        points: number;
    }

    export class IResults implements IResults {
        position: number;
        driver: string;
        team: string;
        qualifyingTime: number;
        raceTime: number;
        points: number;
    }
}
