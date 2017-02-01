import {Component, OnInit} from '@angular/core';
import { UserService } from '../../../services/user.service'

@Component({
    selector: 'header-component',
    providers: [UserService],
    templateUrl: './header.component.html'
})

export class HeaderComponent implements OnInit {

    user: any = {}

    constructor(
        private userService: UserService
    ) {
        this.userService.getUserProfile('jkrause').subscribe((res) => { this.user = res })
    }

    public ngOnInit() {
        this.userService.getUserProfile('jkrause').subscribe((res) => { this.user = res })
    }

}
