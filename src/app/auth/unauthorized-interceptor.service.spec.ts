import { HttpClientTestingModule } from '@angular/common/http/testing';
import { inject, TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';

import { UnauthorizedInterceptor } from './unauthorized-interceptor.service';

describe('UnauthorizedInterceptor', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [
        HttpClientTestingModule,
        RouterTestingModule
      ],
      providers: [UnauthorizedInterceptor]
    });
  });

  it('should be created', inject([UnauthorizedInterceptor], (service: UnauthorizedInterceptor) => {
    expect(service).toBeTruthy();
  }));
});
