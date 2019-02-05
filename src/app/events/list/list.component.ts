import { Component, Input } from '@angular/core';
import { PaginationResponse } from '@datorama/akita';
import { Event } from '../state';

@Component({
  selector: 'app-events-list',
  templateUrl: './list.component.html'
})
export class ListComponent {

  @Input()
  events: PaginationResponse<Event>;

  constructor() {
  }

}
