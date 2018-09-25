import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

import { Observable } from 'rxjs';
import { flatMap, map } from 'rxjs/operators';
import { ConfigService } from '../../core/config.service';
import { Page } from '../../shared/page';
import { Event } from './index';

@Injectable()
export class EventsDataService {

  constructor(private config: ConfigService, private http: HttpClient) {
  }

  create(request: any): Promise<any> {
    return this.config.data.pipe(
      flatMap(config => this.http.post(`${config.apiEndpoint}/events`, request))
    ).toPromise();
  }

  findAll(): Observable<Page<Event>> {
    return this.config.data.pipe(
      flatMap(config => this.http.get(`${config.apiEndpoint}/events`)),
      map(res => new Page<Event>((res as any)._embedded.events))
    );
  }

}
