import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/internal/Observable';
import { flatMap, map } from 'rxjs/operators';
import { ConfigService } from '../../core/config.service';
import { createPage, Page } from '../../shared';
import { Event } from './event.model';

@Injectable({
  providedIn: 'root'
})
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
      flatMap(config => this.http.get<any>(`${config.apiEndpoint}/events`)),
      map(res => createPage<Event>({
        perPage: res.page.size,
        lastPage: res.page.totalPages,
        currentPage: res.page.number + 1,
        data: res._embedded.events
      }))
    );
  }
}
