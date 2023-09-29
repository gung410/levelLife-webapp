import { Injectable } from '@angular/core';
import { Routes, Route } from '@angular/router';
import { MainLayoutComponent } from '../layout/main-page/main-layout.component';
import { LoginComponent } from '../modules/auth/login/login.component';

@Injectable({
    providedIn: 'root'
})

export class shellService {
    constructor() {}

    static childRootPublic(routes: Routes): Route {
        return {
            path:'',
            component: LoginComponent,
            children: routes,
            canActivate: [false],
            data: { reuse: true}
        }
    }
}
