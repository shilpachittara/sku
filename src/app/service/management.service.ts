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
import { Subcode } from '../model/subcode';

@Injectable()
export class ManagementService {
    
    private headers : Headers;
    private options : RequestOptions;
    private URI = "http://localhost:8000"

   constructor(private http : Http, private jsonp: Jsonp) { 
    this.headers = new Headers();
    this.headers.append("Content-Type", "application/json");
    this.headers.append("Authorization", "Bearer " + ""); // add token detail here
    this.options = new RequestOptions({headers : this.headers});
   }

   public getManage(data: AddCode): Observable<any>{
    const postmanageURL = this.URI + "/show"
    return this.http.post(postmanageURL, 
        JSON.stringify(data),this.options).pipe(catchError(this.formatErrors));;
   }

   public postManage(data: AddCode): Observable<any> {

    const postmanageURL = this.URI + "/add"
    return this.http.post(postmanageURL, 
        JSON.stringify(data),this.options).pipe(catchError(this.formatErrors));
    }   

    public postManageSub(data: AddSubcode): Observable<any> {

        const postmanageURL = this.URI + "/add"
        return this.http.post(postmanageURL, 
            JSON.stringify(data),this.options).pipe(catchError(this.formatErrors));
        }  
    
    public getUser(data: AddCode): Observable<any>{
        const userUrl = this.URI + "/showrole";
        return this.http.post(userUrl, 
            JSON.stringify(data),this.options).pipe(catchError(this.formatErrors));
       }

    public postUser(data: User): Observable<any> {
        const userUrl = this.URI + "/role";
        return this.http.post(userUrl, 
            JSON.stringify(data),this.options).pipe(catchError(this.formatErrors));
     }  

    public deleteUser(data: User): Observable<any> {
        const userUrl = this.URI + "/removemail";
        return this.http.post(userUrl, 
            JSON.stringify(data),this.options).pipe(catchError(this.formatErrors));;
    }  

    public postInactive(data: Active): Observable<any> {
        const inactiveUrl = this.URI + "/inactive";
        return this.http.post(inactiveUrl, 
            JSON.stringify(data),this.options).pipe(catchError(this.formatErrors));;
    }  

    public postActive(data: Active): Observable<any> {
        const activeUrl = this.URI + "/active";
        return this.http.post(activeUrl, 
            JSON.stringify(data),this.options).pipe(catchError(this.formatErrors));
    }  

    public getDropDown(data: Subcode): Observable<any>{
        const url = this.URI + "/get";
        return this.http.post(url, 
            JSON.stringify(data),this.options).pipe(catchError(this.formatErrors));;
       }

   private formatErrors(error: any) {
    return  throwError(error.statusText);
  }

}