import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import { environment } from '../../environments/environment';
import 'rxjs/add/operator/map';
import { Health } from './health';

@Injectable()
export class HealthService {

  constructor(private http: Http) {
  }

  data$(): Observable<Health> {
    return this.http.get(`${environment.apiEndpoint}/monitoring/health`)
      .map(res => res.json() as Health);
  }

}
