import { Injectable } from '@angular/core';
import { CanActivate } from '@angular/router';
import { UserService } from "app/services/user.service";

@Injectable()
export class OnlyLoggedInUsersGuard implements CanActivate {

    constructor(private userService: UserService) {

    }

    canActivate() {
        console.log('OnlyLoggedInUsersGuard');

        if(this.userService.isLoggedIn()){
            return true;
        } else{
            window.alert('Access denied');
            return false;
        }
    }
}