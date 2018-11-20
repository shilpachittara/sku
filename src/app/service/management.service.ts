import { Injectable } from '@angular/core';
import { Http, Jsonp, RequestOptions,Headers } from '@angular/http';
import { Observable }        from "rxjs/Observable";
import { map } from "rxjs/operators"
import                          "rxjs/add/operator/catch";
import { Sku } from '../model/sku';
import { Response } from '@angular/http/src/static_response';

import { throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { Code } from '../model/code';
import { Active } from '../model/active';
import { AddCode } from '../model/addcode';
import { AddSubcode } from '../model/addsubcode';
import { User } from '../model/user';

@Injectable()
export class ManagementService {
    
    private URI = "http://localhost:8000"
    /*private getURL = "http://localhost:8000/showsku";
    private postURL = "http://localhost:8000/addsku";
    private getmanageURL = "http://localhost:8000/show";
    private postmanageURL = "http://localhost:8000/add";*/

   constructor(private http : Http, private jsonp: Jsonp) { 
   }

   /*public getCategory(): Observable<any>{
       const getCategory = this.URI + "/showsku";
       return this.http.get(getCategory).pipe((catchError(this.formatErrors)));
   }

   public postCategory(data: Sku): Observable<any> {

    const postCategory = this.URI + "/addsku"
    const headers = new Headers({ 'Content-Type': 'application/json' });
    const options = new RequestOptions({headers : headers});
    return this.http.post(postCategory, 
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
   } */

   public getManage(): Observable<any>{
    const getmanageURL = this.URI + "/show";
    return this.http.get(getmanageURL).pipe((catchError(this.formatErrors)));
   }

   public postManage(data: AddCode): Observable<any> {

    const postmanageURL = this.URI + "/add"
    const headers = new Headers({ 'Content-Type': 'application/json' });
    const options = new RequestOptions({headers : headers});
    return this.http.post(postmanageURL, 
        JSON.stringify(data),options).pipe(catchError(this.formatErrors));;
    }   

    public postManageSub(data: AddSubcode): Observable<any> {

        const postmanageURL = this.URI + "/add"
        const headers = new Headers({ 'Content-Type': 'application/json' });
        const options = new RequestOptions({headers : headers});
        return this.http.post(postmanageURL, 
            JSON.stringify(data),options).pipe(catchError(this.formatErrors));;
        }  

  /* public getSubBrand(): Observable<any>{
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
   }  */
    
    public getUser(): Observable<any>{
        const userUrl = this.URI + "/show";
        return this.http.get(userUrl).pipe((catchError(this.formatErrors)));
       }

    public postUser(data: User): Observable<any> {
        const userUrl = this.URI + "/role";
        const headers = new Headers({ 'Content-Type': 'application/json' });
        const options = new RequestOptions({headers : headers});
        return this.http.post(userUrl, 
            JSON.stringify(data),options).pipe(catchError(this.formatErrors));;
     }  

    public deleteUser(data: User): Observable<any> {
        const userUrl = this.URI + "/removemail";
        const headers = new Headers({ 'Content-Type': 'application/json' });
        const options = new RequestOptions({headers : headers});
        return this.http.post(userUrl, 
            JSON.stringify(data),options).pipe(catchError(this.formatErrors));;
    }  

    public postInactive(data: Active): Observable<any> {
        const inactiveUrl = this.URI + "/inactive";
        const headers = new Headers({ 'Content-Type': 'application/json' });
        const options = new RequestOptions({headers : headers});
        return this.http.post(inactiveUrl, 
            JSON.stringify(data),options).pipe(catchError(this.formatErrors));;
    }  

    public postActive(data: Active): Observable<any> {
        const activeUrl = this.URI + "/active";
        const headers = new Headers({ 'Content-Type': 'application/json' });
        const options = new RequestOptions({headers : headers});
        return this.http.post(activeUrl, 
            JSON.stringify(data),options).pipe(catchError(this.formatErrors));;
    }  

   private formatErrors(error: any) {
    return  throwError(error.error);
  }

}