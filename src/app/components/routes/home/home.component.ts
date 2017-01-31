import {
    Component,
    OnInit
} from '@angular/core';


@Component({
    selector: 'home',  // <home></home>
    // We need to tell Angular's Dependency Injection which providers are in our app.
    //providers: [],
    // Our list of styles in our component. We may add more to compose many styles together
    //styleUrls: ['./header.component.css'],
    // Every Angular template is first compiled by the browser before Angular runs it's compiler
    templateUrl: './home.component.html'
})
export class HomeComponent implements OnInit {
  
    // TypeScript public modifiers
    constructor(
       
    ) { }

    public ngOnInit() {
    }

    public submitState(value: string) {
      
    }
}
