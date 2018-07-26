import { Component, Input } from '@angular/core';
import { Page } from '../../shared/page';

@Component({
  selector: 'app-events-list',
  templateUrl: './list.component.html'
})
export class ListComponent {

  @Input()
  events: Page<any>;

  constructor() {
  }

}
