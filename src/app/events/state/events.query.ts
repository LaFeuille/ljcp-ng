import { Injectable } from '@angular/core';
import { QueryEntity } from '@datorama/akita';
import { EventsStore, EventsState } from './events.store';
import { Event } from './event.model';

@Injectable({ providedIn: 'root' })
export class EventsQuery extends QueryEntity<EventsState, Event> {

  constructor(protected store: EventsStore) {
    super(store);
  }

}
