import { Injectable } from '@angular/core';
import * as faker from 'faker';
import { Event } from './state';

@Injectable({
  providedIn: 'root'
})
export class EventsGeneratorService {

  genOne(): Event {
    return {
      id: faker.random.number(),
      title: faker.lorem.sentence(),
      startDate: faker.date.future(2).toISOString().split('T')[0],
      description: faker.lorem.paragraph()
    };
  }

  genMany(count = faker.random.number()): Event[] {
    return Array.from({length: count}, (x, i) => this.genOne());
  }
}
