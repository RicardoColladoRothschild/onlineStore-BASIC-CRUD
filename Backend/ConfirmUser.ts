/**This calss receive a "login" object and use it password, email and name to confirm if data base info match, if it does, it create
 * a new object: User logged, which will contain current user order, credit, configuration
 */

import LoginUser from './LoginUser';

//const db_connection = new DataBaseConnection('SELECT * FROM products');

export class ConfirmUser{
    private _user:LoginUser;

        constructor(user:LoginUser){
            this._user = user;
            
        }

        isUserConfirmed(){
            
        }
}