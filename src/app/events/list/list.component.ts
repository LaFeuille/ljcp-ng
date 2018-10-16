import { Component, Input } from '@angular/core';
import { Page } from '../../shared/page';
import { Event } from '../state';

@Component({
  selector: 'app-events-list',
  templateUrl: './list.component.html'
})
export class ListComponent {

  @Input()
  events: Page<Event>;

  constructor() {
  }

}
