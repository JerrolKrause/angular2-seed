import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import { Observable } from 'rxjs/Rx';


import 'rxjs/Rx';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/share';
import 'rxjs/add/operator/publishReplay';


@Injectable()
export class ScaffoldService {

    user : any

    constructor(
        private http: Http
    ) {
        console.log(this)
        
    }


    /**
     * Get the AD data of the user
     * @param user - username to look up
     * @param update - remove cached version to get new one
     */
    public getUserProfile(user:string, update?:boolean) {
        let url = '/api/Service/getUserProfile/' + user
        url = '/app/mock-data/GetUserProfile.json'

        if (update) { this.user = null }

        if (!this.user){
            this.user = this.http.get(url)
                .map(res => res.json())
                .publishReplay(1)
                .refCount();
        }
        return this.user
    }//end getUserProfile


}
