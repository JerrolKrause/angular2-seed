import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import { Observable } from 'rxjs/Rx';

import 'rxjs/add/operator/map';
import 'rxjs/add/operator/publishLast';
import 'rxjs/add/operator/publishReplay';
import 'rxjs/observable/of';
import 'rxjs/add/operator/share';


@Injectable()
export class BorrowerService {


    constructor(
        private http: Http
    ) {
    }

    
    GetUserProfile() {
        let url = '/api/Service/getUserProfile/jkrause'

        url = '/app/models/GetUserProfile.json'
        // ...using get request
        return this.http.get(url)
            // ...and calling .json() on the response to return data
            .map(res => res.json())
            .publishReplay(1) 
            .refCount();
    }//end GetUserProfile


}
