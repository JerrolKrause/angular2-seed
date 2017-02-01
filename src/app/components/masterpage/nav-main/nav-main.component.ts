import {Component, OnInit} from '@angular/core';
//import { BorrowerService } from '../../../services/borrower.service'

@Component({
    selector: 'nav-main',  // <home></home>
    // We need to tell Angular's Dependency Injection which providers are in our app.
    //providers: [],
    // Our list of styles in our component. We may add more to compose many styles together
    //styleUrls: ['./nav-main.component.css'],
    // Every Angular template is first compiled by the browser before Angular runs it's compiler
    templateUrl: './nav-main.component.html'
})
export class NavMainComponent implements OnInit {

    User: any = {}

    constructor(
       // private borrowerService: BorrowerService
    ) {
        //this.borrowerService.GetUserProfile().subscribe(data => this.User = data);

        //this.borrowerService.GetUserProfile().subscribe(data => this.User = data);
        //this.borrowerService.GetUserProfile().subscribe((res) => { console.log(res);  });

        //this.User = this.borrowerService.GetUserProfile().subscribe()
    }

    public ngOnInit() {
    }

}
