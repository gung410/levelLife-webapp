import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { shellService } from './services/shell.service';
import { MainLayoutComponent } from './layout/main-page/main-layout.component';
import { LoginComponent } from './modules/auth/login/login.component';

const routes: Routes = [
  {
    path: 'login',
    component: LoginComponent
  },
  {
    path: 'home',
    component: MainLayoutComponent,
  },
  { path: '',
    redirectTo: 'login',
    pathMatch: 'full'
  },
]
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})

export class AppRoutingModule {

 }
