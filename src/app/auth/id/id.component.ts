import { Component, OnInit } from '@angular/core';
import { AuthQuery, AuthService } from '../state';

@Component({
  templateUrl: './id.component.html'
})
export class IdComponent implements OnInit {

  constructor(public query: AuthQuery, private service: AuthService) {
    this.service.renewTokens();
  }

  ngOnInit(): void {
  }

  onLogOut() {
    this.service.logout();
  }

}
