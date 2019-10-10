import { Component, EventEmitter, Input, Output } from '@angular/core';
import { IdToken } from '../state';

@Component({
  selector: 'app-id-card',
  templateUrl: './id-card.component.html',
  styleUrls: ['./id-card.component.scss']
})
export class IdCardComponent {

  @Input()
  idToken: IdToken;

  @Output()
  logOut = new EventEmitter<void>();

  onLogOut() {
    this.logOut.emit();
  }

}
