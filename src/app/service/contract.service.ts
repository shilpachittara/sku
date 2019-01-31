import { Contract } from '../model/contract.model';
import { Http } from '@angular/http';
import { Injectable } from '@angular/core';
import { Subject } from 'rxjs/Subject';
import { Observable } from 'rxjs/Observable';

import { environment } from '../../environments/environment';

@Injectable()
export class ContractService {

    constructor(private http: Http) { }
// implement backend apis here
    public test(): Observable<object> {
        const url = `${environment.BACKEND_URL}/test`;
        return this.http.get(url)
            .map(response => response.json());
    }
}
