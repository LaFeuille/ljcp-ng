import { FactoryProvider, InjectionToken } from '@angular/core';
import { PaginatorPlugin } from '@datorama/akita';
import { Event } from './event.model';
import { EventsQuery } from './events.query';
import { EventsState } from './events.store';

export const EVENTS_PAGINATOR = new InjectionToken('EVENTS_PAGINATOR');
​
export function eventsPaginatorFactory(eventsQuery: EventsQuery) {
  return new PaginatorPlugin<EventsState>(eventsQuery).withControls().withRange();
}
​
export const eventsPaginatorProvider: FactoryProvider = {
  provide: EVENTS_PAGINATOR,
  useFactory: eventsPaginatorFactory,
  deps: [EventsQuery]
};
