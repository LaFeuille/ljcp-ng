import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { map, shareReplay } from 'rxjs/operators';
import { environment } from '../../environments/environment';

export interface Config {
  apiEndpoint: string;
  authCallbackUrl: string;
  auth0Audience: string;
  auth0ClientId: string;
  auth0Domain: string;
}

export const baseConfig: Config = {
  apiEndpoint: '',
  authCallbackUrl: '',
  auth0Audience: 'https://api.lafeuille.org/ljcp/',
  auth0ClientId: 'jdwa60UsWy4NYwaKgAnPgHdQVsNrEgO8',
  auth0Domain: 'lafeuille.eu.auth0.com',
};

@Injectable({
  providedIn: 'root'
})
export class ConfigService {

  data: Observable<Config>;

  constructor(private http: HttpClient) {
    this.data = this.http
      .get<Config>(`./config/${environment.configFile}`)
      .pipe(
        map(config => Object.assign({}, baseConfig, config)),
        shareReplay(1)
      );
  }
}
