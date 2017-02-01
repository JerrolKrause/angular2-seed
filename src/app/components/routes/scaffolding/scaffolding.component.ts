import {
    Component,
    OnInit
} from '@angular/core';
import { ScaffoldService } from '../../../services/scaffold.service'


@Component({
    selector: 'scaffolding',  // <scaffolding></scaffolding>
    // We need to tell Angular's Dependency Injection which providers are in our app.
    //providers: [],
    templateUrl: './scaffolding.component.html'
})


export class ScaffoldingComponent implements OnInit {

    user: any = {}
    errorLoading: boolean = false

    // TypeScript public modifiers
    constructor(
        private scaffoldService: ScaffoldService
    ) { }

    public ngOnInit() {
        //this.userService.getUserProfile('jkrause').subscribe((res) => { this.user = res })
        // res => this.user = res
        this.scaffoldService.getUserProfile('jkrause').subscribe(
            res => this.user = res,
            error => this.errorLoading = true
        )
    }


    /**
     * Toggle the error message
     */
    public showErrorMessage() {
        this.errorLoading = !this.errorLoading
    }//showErrorMessage

    
}
