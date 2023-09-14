import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import {MatButtonModule} from '@angular/material/button';
import {NgIf} from '@angular/common';
import {MatSidenavModule} from '@angular/material/sidenav';

@Component({
  selector: 'app-main-layout',
  templateUrl: './main-layout.component.html',
  styleUrls: ['./main-layout.component.scss'],
  encapsulation: ViewEncapsulation.None, // Tắt ViewEncapsulation
})
export class MainLayoutComponent implements OnInit {
  showFiller = false;

  constructor() { }

  ngOnInit(): void {
  }


}
