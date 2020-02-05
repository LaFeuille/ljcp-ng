import { Component } from '@angular/core';
import { AuthService } from '../auth.service';

@Component({
  templateUrl: './id.component.html'
})
export class IdComponent {

  constructor(public auth: AuthService) {
  }

  onLogIn() {
    this.auth.login();
  }

  onLogOut() {
    this.auth.logout();
  }

}
