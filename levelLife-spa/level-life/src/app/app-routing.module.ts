import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { shellService } from './services/shell.service';
import { MainLayoutComponent } from './layout/main-page/main-layout.component';

const routes: Routes = [
    shellService.childRootPublic([
      {
        path: 'home',
        component: MainLayoutComponent,
      },
      {
        path: '',
        component: MainLayoutComponent,
      },
    ])
]
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})

export class AppRoutingModule {

 }
