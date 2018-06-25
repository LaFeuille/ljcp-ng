import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

import { Observable } from 'rxjs';
import { flatMap } from 'rxjs/operators';
import { ConfigService } from '../core/config.service';
import { Health } from './health';

@Injectable()
export class HealthService {

  constructor(private config: ConfigService, private http: HttpClient) {
  }

  data$(): Observable<Health> {
    return this.config.data.pipe(
      flatMap(config => this.http.get<Health>(`${config.apiEndpoint}/actuator/health`))
    );
  }

}
