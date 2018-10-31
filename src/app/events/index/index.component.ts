import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Page } from '../../shared';
import { Event, EventsDataService } from '../state';

@Component({
  templateUrl: './index.component.html'
})
export class IndexComponent implements OnInit {

  events$: Observable<Page<Event>>;

  constructor(private service: EventsDataService) {
  }

  ngOnInit() {
    this.events$ = this.service.findAll();
  }

}
