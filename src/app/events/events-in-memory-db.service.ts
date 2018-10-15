import { Injectable } from '@angular/core';
import { InMemoryDbService, RequestInfo } from 'angular-in-memory-web-api';

@Injectable({
  providedIn: 'root'
})
export class EventsInMemoryDbService extends InMemoryDbService {

  createDb(reqInfo?: RequestInfo): {} {
    return {
      events: {
        _embedded: {
          events: [
            {
              id: 1,
              title: 'Event 1',
              startDate: '2001-01-01',
              description: 'Description of event 1'
            }
          ]
        }
      }
    };
  }
}
