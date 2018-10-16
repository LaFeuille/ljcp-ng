import { TestBed } from '@angular/core/testing';

import { EventsGeneratorService } from './events-generator.service';

describe('EventsGeneratorService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: EventsGeneratorService = TestBed.get(EventsGeneratorService);
    expect(service).toBeTruthy();
  });

  it('should generate one', () => {
    const service: EventsGeneratorService = TestBed.get(EventsGeneratorService);
    const event = service.genOne();
    expect(event).toBeTruthy();
  });

  it('should generate many', () => {
    const service: EventsGeneratorService = TestBed.get(EventsGeneratorService);
    const events = service.genMany(1);
    expect(events).toBeTruthy();
    expect(events.length).toBe(1);
  });
});
