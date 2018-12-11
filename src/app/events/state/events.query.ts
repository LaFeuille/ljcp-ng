import { Injectable } from '@angular/core';
import { QueryEntity } from '@datorama/akita';
import { Event } from './event.model';
import { EventsState, EventsStore } from './events.store';

@Injectable({
  providedIn: 'root'
})
export class EventsQuery extends QueryEntity<EventsState, Event> {

  constructor(protected store: EventsStore) {
    super(store);
  }

}
