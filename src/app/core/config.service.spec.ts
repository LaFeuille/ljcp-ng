import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
import { Type } from '@angular/core';
import { TestBed } from '@angular/core/testing';

import { ConfigService } from './config.service';

describe('ConfigService', () => {

  let http: HttpTestingController;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      providers: [ConfigService]
    });
    http = TestBed.get(HttpTestingController as Type<HttpTestingController>);
  });

  const expectResults = (config, done: DoneFn, {apiEndpoint, authCallbackUrl}) => {
    expect(config.apiEndpoint).toEqual(apiEndpoint);
    expect(config.authCallbackUrl).toEqual(authCallbackUrl);
    done();
  };

  it('should equal base config if no override', (done: DoneFn) => {
    const service = TestBed.get(ConfigService);
    service.data.subscribe(config => expectResults(config, done, {apiEndpoint: '', authCallbackUrl: ''}));

    const req = http.expectOne('./config/environment.dev.json');
    expect(req.request.method).toEqual('GET');
    req.flush({});
    http.verify();
  });

  it('should equal overridden config', (done: DoneFn) => {
    const service = TestBed.get(ConfigService);
    service.data.subscribe(config => expectResults(config, done, {
      apiEndpoint: 'https://google.com/',
      authCallbackUrl: 'http://localhost:4200/auth/callback'
    }));

    const req = http.expectOne('./config/environment.dev.json');
    expect(req.request.method).toEqual('GET');
    req.flush({
      apiEndpoint: 'https://google.com/',
      authCallbackUrl: 'http://localhost:4200/auth/callback'
    });
    http.verify();
  });

  afterEach(() => {
    http.verify();
  });
});
