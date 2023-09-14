import { Injectable } from '@angular/core';
import { Routes, Route } from '@angular/router';
import { MainLayoutComponent } from '../layout/main-page/main-layout.component';

@Injectable({
    providedIn: 'root'
})

export class shellService {
    constructor() {}

    static childRootPublic(routes: Routes): Route {
        return {
            path:'',
            component: MainLayoutComponent,
            children: routes,
            canActivate: [],
            data: { reuse: true}
        }
    }
}
