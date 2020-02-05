import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-id-card',
  templateUrl: './id-card.component.html',
  styleUrls: ['./id-card.component.scss']
})
export class IdCardComponent {

  @Input()
  idToken: IdToken;

  @Output()
  logIn = new EventEmitter<void>();

  @Output()
  logOut = new EventEmitter<void>();

  onLogIn() {
    this.logIn.emit();
  }

  onLogOut() {
    this.logOut.emit();
  }

}
