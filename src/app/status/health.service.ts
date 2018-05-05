
import {map} from 'rxjs/operators';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

import { Observable } from 'rxjs';
import { environment } from '../../environments/environment';
import { Health } from './health';

@Injectable()
export class HealthService {

  constructor(private http: HttpClient) {
  }

  data$(): Observable<Health> {
    return this.http.get(`${environment.apiEndpoint}/actuator/health`).pipe(
      map(res => res as Health));
  }

}
