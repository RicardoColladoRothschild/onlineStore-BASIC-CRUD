import { IUser } from './IUser';
export class CreateUser{
    private _newUser:IUser;
        
    constructor(newUser:IUser){
        this._newUser = newUser;

    }
}