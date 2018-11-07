import { Component, Inject, OnDestroy, OnInit } from '@angular/core';
import { PaginationResponse, PaginatorPlugin as Paginator } from '@datorama/akita';
import { Observable } from 'rxjs/internal/Observable';
import { switchMap } from 'rxjs/operators';
import { Event, EVENTS_PAGINATOR, EventsDataService } from '../state';

@Component({
  templateUrl: './index.component.html'
})
export class IndexComponent implements OnInit, OnDestroy {

  pagination$: Observable<PaginationResponse<Event>>;

  constructor(@Inject(EVENTS_PAGINATOR) public paginator: Paginator<Event>,
              private service: EventsDataService) {
  }

  ngOnInit() {
    this.pagination$ = this.paginator.pageChanges.pipe(
      switchMap(page => {
        return this.paginator.getPage(() => this.service.findAll());
      })
    );
  }

  ngOnDestroy() {
    this.paginator.destroy();
  }

}
