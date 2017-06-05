import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/toPromise';
import { Observable } from 'rxjs/Observable';
import { environment } from '../../environments/environment';
import { Page } from '../shared/page';
import { Event } from './event';

@Injectable()
export class EventsService {

  constructor(private http: Http) {
  }

  create(request: any): Promise<any> {
    return this.http.post(`${environment.apiEndpoint}/events`, request)
      .map(res => res.json())
      .toPromise();
  }

  findAll(): Observable<Page<Event>> {
    return this.http.get(`${environment.apiEndpoint}/events`)
      .map(res => res.json())
      .map(json => new Page<any>(json._embedded.events));
  }

}
