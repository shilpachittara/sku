import { Injectable } from '@angular/core';
import { Http, Jsonp, RequestOptions,Headers } from '@angular/http';
import { Observable }        from "rxjs/Observable";
import { map } from "rxjs/operators"
import                          "rxjs/add/operator/catch";
import { Sku } from '../model/sku';
import { Response } from '@angular/http/src/static_response';

import { throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { Skucode } from '../model/skucode';

@Injectable()
export class SkuService {
    private URI = "http://localhost:8000";


   constructor(private http : Http, private jsonp: Jsonp) { 
   }

   public getProducts(): Observable<any>{
    const skuUrl = this.URI + "/showsku";
       return this.http.get(skuUrl).pipe((catchError(this.formatErrors)));
   }

   public postProducts(skudata: Sku): Observable<any> {

    const skuUrl = this.URI + "/addsku";
    const headers = new Headers({ 'Content-Type': 'application/json' });
    const options = new RequestOptions({headers : headers});
    return this.http.post(skuUrl, 
        JSON.stringify(skudata),options).pipe(catchError(this.formatErrors));;

   }

   public getSku(skudata: Skucode): Observable<any> {

    const skuUrl = this.URI + "/getsku";
    const headers = new Headers({ 'Content-Type': 'application/json' });
    const options = new RequestOptions({headers : headers});
    return this.http.post(skuUrl, 
        JSON.stringify(skudata),options).pipe(catchError(this.formatErrors));;

   }

   public putProducts(skudata: Sku): Observable<any> {

    const skuUrl = this.URI + "/updatesku";
    const headers = new Headers({ 'Content-Type': 'application/json' });
    const options = new RequestOptions({headers : headers});
    return this.http.post(skuUrl, 
        JSON.stringify(skudata),options).pipe(catchError(this.formatErrors));;

   }

   private formatErrors(error: any) {
    return  throwError(error.statusText);
  }

}