import {
    Component,
    OnInit
} from '@angular/core';


@Component({
    selector: 'layout-main',  
    templateUrl: './layout-main.component.html'
})
export class LayoutMainComponent implements OnInit {
   
    // TypeScript public modifiers
    constructor(
       
    ) { }

    public ngOnInit() {
        //console.log('hello `Home` component');
        // this.title.getData().subscribe(data => this.data = data);
    }
    
}
