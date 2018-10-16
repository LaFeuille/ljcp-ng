import { HttpClientTestingModule } from '@angular/common/http/testing';
import { TestBed } from '@angular/core/testing';

import { EventsDataService } from './events-data.service';

describe('EventsDataService', () => {
  beforeEach(() => TestBed.configureTestingModule({
    imports: [
      HttpClientTestingModule
    ]
  }));

  it('should be created', () => {
    const service: EventsDataService = TestBed.get(EventsDataService);
    expect(service).toBeTruthy();
  });
});
