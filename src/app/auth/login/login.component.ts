import { Component, OnInit } from '@angular/core';
import { AuthService } from '../state';

@Component({
  template: ''
})
export class LoginComponent implements OnInit {

  constructor(private auth: AuthService) {
  }

  ngOnInit() {
    this.auth.login();
  }

}
