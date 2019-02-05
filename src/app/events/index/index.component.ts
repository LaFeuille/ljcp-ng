import { Component, Inject, OnDestroy, OnInit } from '@angular/core';
import { MatSnackBar } from '@angular/material';
import { PaginationResponse, PaginatorPlugin as Paginator } from '@datorama/akita';
import { Observable, Subscription } from 'rxjs';
import { filter, switchMap } from 'rxjs/operators';
import { Event, EVENTS_PAGINATOR, EventsDataService, EventsQuery } from '../state';

@Component({
  templateUrl: './index.component.html'
})
export class IndexComponent implements OnInit, OnDestroy {

  pagination$: Observable<PaginationResponse<Event>>;

  private subs: Subscription[] = [];

  constructor(@Inject(EVENTS_PAGINATOR) public paginator: Paginator<Event>,
              private snackBar: MatSnackBar,
              private service: EventsDataService,
              private query: EventsQuery) {
  }

  ngOnInit() {
    this.pagination$ = this.paginator.pageChanges.pipe(
      switchMap(page => {
        return this.paginator.getPage(() => this.service.findAll());
      })
    );
    this.subs.push(
      this.query.selectError().pipe(
        filter(err => !!err)
      ).subscribe(err =>
        this.snackBar.open(err)
      )
    );
  }

  ngOnDestroy() {
    this.paginator.destroy();
    this.subs.forEach(sub => sub.unsubscribe());
  }

}
