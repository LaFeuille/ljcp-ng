import { Injectable } from '@angular/core';
import { InMemoryDbService, RequestInfo } from 'angular-in-memory-web-api';

@Injectable({
  providedIn: 'root'
})
export class AppInMemoryDbService extends InMemoryDbService {
  createDb(reqInfo?: RequestInfo): {} {
    return {};
  }
}
