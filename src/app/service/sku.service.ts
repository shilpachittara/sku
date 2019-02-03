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
    private headers : Headers;
    private options : RequestOptions;

   constructor(private http : Http, private jsonp: Jsonp) { 
    this.headers = new Headers();
    this.headers.append("Content-Type", "application/json");
    this.headers.append("Authorization", "Bearer " + ""); // add token detail here
    this.options = new RequestOptions({headers : this.headers});
    
   }

   public getProducts(): Observable<any>{
    const skuUrl = this.URI + "/showsku";
    
       return this.http.get(skuUrl, this.options).pipe((catchError(this.formatErrors)));
   }

   public postProducts(skudata: Sku): Observable<any> {

    const skuUrl = this.URI + "/addsku";
    return this.http.post(skuUrl, 
        JSON.stringify(skudata), this.options).pipe(catchError(this.formatErrors));;

   }

   public getSku(skudata: Skucode): Observable<any> {

    const skuUrl = this.URI + "/getsku";
    return this.http.post(skuUrl, 
        JSON.stringify(skudata),this.options).pipe(catchError(this.formatErrors));;

   }

   public putProducts(skudata: Sku): Observable<any> {

    const skuUrl = this.URI + "/updatesku";
    return this.http.post(skuUrl, 
        JSON.stringify(skudata),this.options).pipe(catchError(this.formatErrors));;

   }

   private formatErrors(error: any) {
    return  throwError(error.statusText);
  }

}