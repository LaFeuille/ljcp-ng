import { Component, OnInit, ViewChild } from '@angular/core';
import { MdSidenav, MdSidenavToggleResult } from '@angular/material';

@Component({
  selector: 'app-sidenav',
  templateUrl: './sidenav.component.html',
  styleUrls: [ './sidenav.component.css' ]
})
export class SidenavComponent implements OnInit {

  @ViewChild(MdSidenav) sidenav: MdSidenav;

  constructor() {
  }

  ngOnInit() {
  }

  open(): Promise<MdSidenavToggleResult> {
    return this.sidenav.open();
  }

}
