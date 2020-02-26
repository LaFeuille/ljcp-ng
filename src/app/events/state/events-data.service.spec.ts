import { HttpClientTestingModule } from '@angular/common/http/testing';
import { TestBed } from '@angular/core/testing';

import { EventsDataService } from './events-data.service';

describe('EventsDataService', () => {
  beforeEach(() => TestBed.configureTestingModule({
    imports: [
      HttpClientTestingModule
    ],
    providers: [
      EventsDataService
    ]
  }));

  it('should be created', () => {
    const service: EventsDataService = TestBed.inject(EventsDataService);
    expect(service).toBeTruthy();
  });
});
