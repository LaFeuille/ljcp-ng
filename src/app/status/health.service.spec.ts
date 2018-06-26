import { HttpClientTestingModule } from '@angular/common/http/testing';
import { inject, TestBed } from '@angular/core/testing';

import { HealthService } from './health.service';

describe('HealthService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      providers: [HealthService]
    });
  });

  it('should ...', inject([HealthService], (service: HealthService) => {
    expect(service).toBeTruthy();
  }));
});
