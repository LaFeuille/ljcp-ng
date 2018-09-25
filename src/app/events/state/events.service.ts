import { Injectable } from '@angular/core';
import { ID } from '@datorama/akita';
import { EventsStore } from './events.store';
import { HttpClient } from '@angular/common/http';

@Injectable({ providedIn: 'root' })
export class EventsService {

  constructor(private eventsStore: EventsStore,
              private http: HttpClient) {
  }

  get() {
    // this.http.get().subscribe((entities: ServerResponse) => {
      // this.eventsStore.set(entities);
    // });
  }

  add() {
    // this.http.post().subscribe((entity: ServerResponse) => {
      // this.eventsStore.add(entity);
    // });
  }

}
