import { Injectable } from '@angular/core';
import { Http, Jsonp, RequestOptions,Headers } from '@angular/http';
import { Observable }        from "rxjs/Observable";
import { map } from "rxjs/operators"
import                          "rxjs/add/operator/catch";
import { Sku } from '../model/sku';
import { Response } from '@angular/http/src/static_response';

@Injectable()
export class SkuService {
    private getURL = "http://localhost:8000/showsku";
    private postURL = "http://localhost:8000/addsku";

   constructor(private http : Http, private jsonp: Jsonp) { 
   }

   public getProducts(): Observable<Sku[]>{
       return this.http.get(this.getURL).pipe(map(this.onSuccess));
   }

   public postProducts(skudata: Sku): Observable<string> {

    const headers = new Headers({ 'Content-Type': 'application/json' });
    const options = new RequestOptions({headers : headers});
    
    const jsonData    = JSON.stringify(skudata);
    return this.http.post(this.postURL,jsonData,options).pipe(map((response:Response)=> response.json()));

   }

   private onSuccess(response:Response) : Sku[]
   {
       return response.json();
       //return null;
   }

   private onError(error:Response | any)
    {
        return Observable.throw({ code: error.status, message: error.statusText });
    }

}