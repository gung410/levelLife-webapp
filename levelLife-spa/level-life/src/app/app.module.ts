import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './layout/header/header.component';
import { FooterComponent } from './layout/footer/footer.component';
import { MainLayoutComponent } from './layout/main-page/main-layout.component';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import {NgFor, NgIf} from '@angular/common';
import {MatSidenavModule} from '@angular/material/sidenav';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { TaskListComponent } from './modules/facility/task-list/task-list.component';
import {MatExpansionModule} from '@angular/material/expansion';
import { MatCardModule } from '@angular/material/card';
import { MatFormFieldModule } from '@angular/material/form-field';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatInputModule } from '@angular/material/input';
import { HttpClient, HttpClientModule } from '@angular/common/http';

import {
  CdkDragDrop,
  moveItemInArray,
  transferArrayItem,
  CdkDrag,
  CdkDropList,
} from '@angular/cdk/drag-drop';
import { LoginComponent } from './modules/auth/login/login.component';
import { FormGroup, FormControl } from '@angular/forms';
import { ENDPOINTS_CONFIG, EndpointsConfig } from './config/endpoins.config';
import { JwtInterceptor } from './core/iwt.intercepter';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    MainLayoutComponent,
    LoginComponent,
  ],
  imports: [
    BrowserModule,
    MatToolbarModule,
    MatInputModule,
    MatButtonModule,
    MatExpansionModule,
    HttpClientModule,
    NgIf,
    BrowserAnimationsModule,
    MatSidenavModule,
    MatIconModule,
    AppRoutingModule,
    TaskListComponent,
    CdkDropList,
    NgFor,
    CdkDrag,
    MatCardModule,
    MatFormFieldModule,
    ReactiveFormsModule,
    FormsModule,
  ],
  providers: [
    { provide: ENDPOINTS_CONFIG, useValue: EndpointsConfig},
  ],
  bootstrap: [AppComponent, HeaderComponent]
})
export class AppModule { }
