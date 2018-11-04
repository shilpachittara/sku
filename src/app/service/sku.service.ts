import { Injectable } from '@angular/core';
import { Http, Jsonp, RequestOptions,Headers } from '@angular/http';
import { Observable }        from "rxjs/Observable";
import { map } from "rxjs/operators"
import                          "rxjs/add/operator/catch";
import { Sku } from '../model/sku';
import { Response } from '@angular/http/src/static_response';

import { throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';

@Injectable()
export class SkuService {
    private getURL = "http://localhost:8000/showsku";
    private postURL = "http://localhost:8000/addsku";

   constructor(private http : Http, private jsonp: Jsonp) { 
   }

   public getProducts(): Observable<any>{
       return this.http.get(this.getURL).pipe((catchError(this.formatErrors)));
   }

   public postProducts(skudata: Sku): Observable<any> {

    const headers = new Headers({ 'Content-Type': 'application/json' });
    const options = new RequestOptions({headers : headers});
    return this.http.post(this.postURL, 
        JSON.stringify(skudata),options).pipe(catchError(this.formatErrors));;

   }

   private formatErrors(error: any) {
    return  throwError(error.error);
  }

}