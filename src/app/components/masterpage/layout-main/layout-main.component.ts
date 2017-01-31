import {
    Component,
    OnInit
} from '@angular/core';


@Component({
    // The selector is what angular internally uses
    // for `document.querySelectorAll(selector)` in our index.html
    // where, in this case, selector is the string 'home'
    selector: 'layout-main',  // <home></home>
    // We need to tell Angular's Dependency Injection which providers are in our app.
    //providers: [],
    // Our list of styles in our component. We may add more to compose many styles together
    //styleUrls: ['./layout-main.component.css'],
    // Every Angular template is first compiled by the browser before Angular runs it's compiler
    templateUrl: './layout-main.component.html'
})
export class LayoutMainComponent implements OnInit {
    // Set our default values
    public localState = { value: '' };
    // TypeScript public modifiers
    constructor(
       
    ) { }

    public ngOnInit() {
        //console.log('hello `Home` component');
        // this.title.getData().subscribe(data => this.data = data);
    }

    public submitState(value: string) {
      
    }
}
