import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/toPromise';
import { Observable } from 'rxjs/Observable';
import { environment } from '../../environments/environment';
import { Page } from '../shared/page';
import { Event } from './event';

@Injectable()
export class EventsService {

  constructor(private http: HttpClient) {
  }

  create(request: any): Promise<any> {
    return this.http.post(`${environment.apiEndpoint}/events`, request)
      .toPromise();
  }

  findAll(): Observable<Page<Event>> {
    return this.http.get(`${environment.apiEndpoint}/events`)
      .map(res => new Page<any>((res as any)._embedded.events));
  }

}
