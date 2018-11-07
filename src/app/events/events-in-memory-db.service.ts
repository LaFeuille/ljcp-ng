import { Injectable } from '@angular/core';
import { InMemoryDbService, RequestInfo } from 'angular-in-memory-web-api';
import { EventsGeneratorService } from './events-generator.service';

@Injectable({
  providedIn: 'root'
})
export class EventsInMemoryDbService extends InMemoryDbService {

  constructor(private generator: EventsGeneratorService) {
    super();
  }

  createDb(reqInfo?: RequestInfo): {} {
    return {
      events: {
        page: {
          size: 20,
          totalElements: 20,
          totalPages: 1,
          number: 0
        },
        _embedded: {
          events: this.generator.genMany(20)
        }
      }
    };
  }
}
