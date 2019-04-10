import { Component, OnInit } from '@angular/core';
import { AuthService } from '../state';

@Component({
  templateUrl: './callback.component.html',
  styleUrls: ['./callback.component.scss']
})
export class CallbackComponent implements OnInit {

  constructor(private auth: AuthService) {
  }

  ngOnInit() {
    this.auth.handleAuthentication();
  }

}
