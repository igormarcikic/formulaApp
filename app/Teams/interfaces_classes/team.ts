module app.teams {
    export interface ITeam {
        round: number;
        grandPrix: string;
        driver1: string;
        driver2: string;
        points: number;
    }

    export class Teams implements ITeam {
        constructor(public round: number,
            public grandPrix: string,
            public driver1: string,
            public driver2: string,
            public points: number) {
        }
    }
}
