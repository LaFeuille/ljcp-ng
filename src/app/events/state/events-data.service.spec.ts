import { HttpClientTestingModule } from '@angular/common/http/testing';
import { inject, TestBed } from '@angular/core/testing';

import { EventsDataService } from './events-data.service';

describe('EventsDataService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      providers: [EventsDataService]
    });
  });

  it('should be created', inject([EventsDataService], (service: EventsDataService) => {
    expect(service).toBeTruthy();
  }));
});
