class LoginUser{
    private _name:string;
    private _age:number;
    private _email:string;
 
    private _creaditAvailable:number;

        constructor(name:string, age:number, email:string, credit:number){
            this._name = name;
            this._age = age;
            this._email=email;
            this._creaditAvailable=credit;
        }


        get name(){
            return this._name;
        }

        get email(){
            return this._email;
        }

        get credit(){
            return this._creaditAvailable;
        }

        get age(){
            return this._age;
        }
}