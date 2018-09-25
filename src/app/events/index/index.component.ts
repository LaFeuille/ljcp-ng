import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Page } from '../../shared/page';
import { EventsDataService } from '../state/events-data.service';

@Component({
  templateUrl: './index.component.html'
})
export class IndexComponent implements OnInit {

  events$: Observable<Page<any>>;

  constructor(private service: EventsDataService) {
  }

  ngOnInit() {
    this.events$ = this.service.findAll();
  }

}
