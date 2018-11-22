import { Injectable } from "@angular/core";
import { Sku } from "../model/sku";
import { Code } from "../model/code";
import { Subcode } from "../model/subcode";


@Injectable()
export class AppGlobalDataService
{
    private _sku: Sku;
    private _code: Code; 
    private _subcode: Subcode;
    public actionType: string;
    public backvalue: string;
    public backurl: string;

    constructor(){
        this._sku = new Sku();
    }

    get sku(): Sku {
        return this._sku;
    }

    set sku(data: Sku){
        this._sku;
    }

    get code(): Code {
        return this._code;
    }

    set code(data: Code){
        this._code;
    }

    set subcode(data: Subcode){
        this._subcode;
    }

    get subcode(): Subcode {
        return this._subcode;
    }


}