import { Injectable } from '@angular/core';
import { CanDeactivate, ActivatedRouteSnapshot, RouterStateSnapshot } from "@angular/router";
import { SearchComponent } from 'app/components/search/search.component';

@Injectable()
export class UnsearchedTermGuard implements CanDeactivate<SearchComponent> {
    // tslint:disable-next-line:max-line-length
    canDeactivate(component: SearchComponent, route: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean {
        console.log(route.params);

        return component.canDeactivate() || window.confirm('Are you sure?');
    }


}