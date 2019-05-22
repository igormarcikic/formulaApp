module app.ddetails{
    export interface IDriversDetails {
        givenName:string;
        familyNane:string;
        nationality: string;
        dateOfBirth: string;
        name: string;
        url: string;
        driverId:string;
    
    }
    
    export class DriversDetails implements IDriversDetails {
        givenName:string;
        familyNane:string;
        nationality: string;
        dateOfBirth: string;
        url: string;
        name: string;
        driverId:string;
    
    
    }
    }