import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { environment } from '../../../environments/environment';
import { createPage, Page } from '../../shared';
import { Event } from './event.model';

@Injectable({
  providedIn: 'root'
})
export class EventsDataService {

  constructor(private http: HttpClient) {
  }

  create(request: any): Promise<any> {
    return this.http.post(`${environment.apiEndpoint}/events`, request).toPromise();
  }

  findAll(): Observable<Page<Event>> {
    return this.http.get<any>(`${environment.apiEndpoint}/events`).pipe(
      map(res => createPage<Event>({
        perPage: res.page.size,
        lastPage: res.page.totalPages,
        currentPage: res.page.number + 1,
        data: res._embedded.events
      }))
    );
  }
}
