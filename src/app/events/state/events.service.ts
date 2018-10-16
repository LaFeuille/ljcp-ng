import { Injectable } from '@angular/core';
import { EventsDataService } from './events-data.service';
import { EventsStore } from './events.store';

@Injectable({providedIn: 'root'})
export class EventsService {

  constructor(private store: EventsStore,
              private data: EventsDataService) {
  }

  get() {
    this.store.setLoading(true);
    this.data.findAll().subscribe(
      page => {
        this.store.set(page.content);
      },
      error => {
        this.store.setError(error);
      },
      () => {
        this.store.setLoading(false);
      }
    );
  }

}
