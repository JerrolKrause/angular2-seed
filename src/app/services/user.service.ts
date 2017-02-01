import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import { Observable } from 'rxjs/Rx';

import 'rxjs/Rx';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/share';
import 'rxjs/add/operator/publishReplay';


@Injectable()
export class UserService {

    user : any

    constructor(
        private http: Http
    ) {
    }


    /**
     * Get the AD data of the user
     * @param user - username to look up 
     */
    public getUserProfile(user:string) {
        let url = '/api/Service/getUserProfile/' + user
        url = '/app/mock-data/GetUserProfile.json'

        if (!this.user){
            this.user = this.http.get(url)
                .map(res => res.json())
                .publishReplay(1)
                .refCount();
        }
        return this.user
        
    }//end getUserProfile


}
