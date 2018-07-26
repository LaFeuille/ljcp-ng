import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Page } from '../../shared/page';
import { EventsService } from '../events.service';

@Component({
  templateUrl: './index.component.html'
})
export class IndexComponent implements OnInit {

  events$: Observable<Page<any>>;

  constructor(private service: EventsService) {
  }

  ngOnInit() {
    this.events$ = this.service.findAll();
  }

}
