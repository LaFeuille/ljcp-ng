import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';
import { Observable } from 'rxjs/Observable';
import { environment } from '../../environments/environment';
import { Page } from '../shared/page';

@Injectable()
export class EventsService {

  constructor(private http: Http) {
  }

  findAll(): Observable<Page<any>> {
    return this.http.get(`${environment.apiEndpoint}/events`)
      .map(res => res.json())
      .map(json => new Page<any>(json._embedded.events));
  }

}
