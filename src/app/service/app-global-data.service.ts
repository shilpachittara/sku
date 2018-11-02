import { Injectable } from "@angular/core";
import { Sku } from "../model/sku";


@Injectable()
export class AppGlobalDataService
{
    private _sku: Sku;

    constructor(){
        this._sku = new Sku();
    }

    get sku(): Sku {
        return this._sku;
    }
}