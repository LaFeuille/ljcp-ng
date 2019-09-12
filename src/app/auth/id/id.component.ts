import { Component } from '@angular/core';
import { AuthQuery } from '../state';

@Component({
  templateUrl: './id.component.html'
})
export class IdComponent {

  constructor(public query: AuthQuery) {
  }

}
