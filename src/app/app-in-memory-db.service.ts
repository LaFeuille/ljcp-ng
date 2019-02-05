import { Injectable } from '@angular/core';
import { InMemoryDbService, ParsedRequestUrl, RequestInfo, RequestInfoUtilities } from 'angular-in-memory-web-api';
import { baseConfig } from './core/config.service';

@Injectable({
  providedIn: 'root'
})
export class AppInMemoryDbService extends InMemoryDbService {

  parseRequestUrl(url: string, utils: RequestInfoUtilities): ParsedRequestUrl | undefined {
    const newUrl = url.replace(/\/config\/.*/, '/config');
    return utils.parseRequestUrl(newUrl);
  }

  createDb(reqInfo?: RequestInfo): {} {
    return {
      config: baseConfig
    };
  }
}
