import { Component, Input } from '@angular/core';
import { Page } from '../../shared/page';

@Component({
  selector: 'app-events-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent {

  @Input()
  events: Page<any>;

  constructor() {
  }

}
