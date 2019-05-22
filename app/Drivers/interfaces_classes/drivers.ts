module app.drivers {
    export interface IDrivers {
        position: number;
        givenName: string;
        familyName: string;
        name: string;
        points: number;

    }

    export class Drivers implements IDrivers {
        points: number;
        position: number;
        givenName: string;
        familyName: string;
        name: string;
        
        
    }
}
