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
export class ManagementService {
    private getURL = "http://localhost:8000/showsku";
    private postURL = "http://localhost:8000/addsku";

   constructor(private http : Http, private jsonp: Jsonp) { 
   }

   public getCategory(): Observable<any>{
       return this.http.get(this.getURL).pipe((catchError(this.formatErrors)));
   }

   public postCategory(data: Sku): Observable<any> {

    const headers = new Headers({ 'Content-Type': 'application/json' });
    const options = new RequestOptions({headers : headers});
    return this.http.post(this.postURL, 
        JSON.stringify(data),options).pipe(catchError(this.formatErrors));;
   }

   public getSubCategory(): Observable<any>{
    return this.http.get(this.getURL).pipe((catchError(this.formatErrors)));
   }

   public postSubCategory(data: Sku): Observable<any> {

    const headers = new Headers({ 'Content-Type': 'application/json' });
    const options = new RequestOptions({headers : headers});
    return this.http.post(this.postURL, 
        JSON.stringify(data),options).pipe(catchError(this.formatErrors));;
    }

   public getBrand(): Observable<any>{
    return this.http.get(this.getURL).pipe((catchError(this.formatErrors)));
   }

   public postBrand(data: Sku): Observable<any> {

    const headers = new Headers({ 'Content-Type': 'application/json' });
    const options = new RequestOptions({headers : headers});
    return this.http.post(this.postURL, 
        JSON.stringify(data),options).pipe(catchError(this.formatErrors));;
    }   

   public getSubBrand(): Observable<any>{
    return this.http.get(this.getURL).pipe((catchError(this.formatErrors)));
   }

   public postSubBrand(data: Sku): Observable<any> {

    const headers = new Headers({ 'Content-Type': 'application/json' });
    const options = new RequestOptions({headers : headers});
    return this.http.post(this.postURL, 
        JSON.stringify(data),options).pipe(catchError(this.formatErrors));;
    }   
    
    public getCollection(): Observable<any>{
    return this.http.get(this.getURL).pipe((catchError(this.formatErrors)));
   }

   public postCollection(data: Sku): Observable<any> {

    const headers = new Headers({ 'Content-Type': 'application/json' });
    const options = new RequestOptions({headers : headers});
    return this.http.post(this.postURL, 
        JSON.stringify(data),options).pipe(catchError(this.formatErrors));;
    } 
    
   public getColour(): Observable<any>{
    return this.http.get(this.getURL).pipe((catchError(this.formatErrors)));
   }

   public postColour(data: Sku): Observable<any> {

    const headers = new Headers({ 'Content-Type': 'application/json' });
    const options = new RequestOptions({headers : headers});
    return this.http.post(this.postURL, 
        JSON.stringify(data),options).pipe(catchError(this.formatErrors));;
    }  
    
    public getColourVariation(): Observable<any>{
    return this.http.get(this.getURL).pipe((catchError(this.formatErrors)));
   }

   public postColourVariation(data: Sku): Observable<any> {

    const headers = new Headers({ 'Content-Type': 'application/json' });
    const options = new RequestOptions({headers : headers});
    return this.http.post(this.postURL, 
        JSON.stringify(data),options).pipe(catchError(this.formatErrors));;
    }   

    public getGender(): Observable<any>{
    return this.http.get(this.getURL).pipe((catchError(this.formatErrors)));
   }

   public postGender(data: Sku): Observable<any> {

    const headers = new Headers({ 'Content-Type': 'application/json' });
    const options = new RequestOptions({headers : headers});
    return this.http.post(this.postURL, 
        JSON.stringify(data),options).pipe(catchError(this.formatErrors));;
    }   

    public getSize(): Observable<any>{
    return this.http.get(this.getURL).pipe((catchError(this.formatErrors)));
   }

   public postSize(data: Sku): Observable<any> {

    const headers = new Headers({ 'Content-Type': 'application/json' });
    const options = new RequestOptions({headers : headers});
    return this.http.post(this.postURL, 
        JSON.stringify(data),options).pipe(catchError(this.formatErrors));;
    }   

    public getTax(): Observable<any>{
    return this.http.get(this.getURL).pipe((catchError(this.formatErrors)));
   }

   public postTax(data: Sku): Observable<any> {

    const headers = new Headers({ 'Content-Type': 'application/json' });
    const options = new RequestOptions({headers : headers});
    return this.http.post(this.postURL, 
        JSON.stringify(data),options).pipe(catchError(this.formatErrors));;
    }   

   private formatErrors(error: any) {
    return  throwError(error.error);
  }

}