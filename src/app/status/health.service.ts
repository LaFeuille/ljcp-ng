import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import 'rxjs/add/operator/map';
import { Observable } from 'rxjs/Observable';
import { environment } from '../../environments/environment';
import { Health } from './health';

@Injectable()
export class HealthService {

  constructor(private http: HttpClient) {
  }

  data$(): Observable<Health> {
    return this.http.get(`${environment.apiEndpoint}/monitoring/health`)
      .map(res => res as Health);
  }

}
