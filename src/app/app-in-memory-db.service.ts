import { Injectable } from '@angular/core';
import { InMemoryDbService, ParsedRequestUrl, RequestInfo, RequestInfoUtilities } from 'angular-in-memory-web-api';

@Injectable({
  providedIn: 'root'
})
export class AppInMemoryDbService extends InMemoryDbService {

  parseRequestUrl(url: string, utils: RequestInfoUtilities): ParsedRequestUrl | undefined {
    return utils.parseRequestUrl(url);
  }

  createDb(reqInfo?: RequestInfo): {} {
    return {};
  }
}
