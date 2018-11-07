import { FactoryProvider, InjectionToken } from '@angular/core';
import { PaginatorPlugin } from '@datorama/akita';
import { Event } from './event.model';
import { EventsQuery } from './events.query';

export const EVENTS_PAGINATOR = new InjectionToken('EVENTS_PAGINATOR');
​
function eventsPaginatorFactory(eventsQuery: EventsQuery) {
  return new PaginatorPlugin<Event>(eventsQuery).withControls().withRange();
}
​
export const eventsPaginatorProvider: FactoryProvider = {
  provide: EVENTS_PAGINATOR,
  useFactory: eventsPaginatorFactory,
  deps: [EventsQuery]
};
