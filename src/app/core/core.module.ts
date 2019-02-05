import { CommonModule } from '@angular/common';
import { HTTP_INTERCEPTORS } from '@angular/common/http';
import { ModuleWithProviders, NgModule } from '@angular/core';
import { CredentialsInterceptor } from './credentials-interceptor.service';
import { HttpErrorInterceptor } from './http-error-interceptor.service';

@NgModule({
  imports: [
    CommonModule,
  ]
})
export class CoreModule {
  static forRoot(): ModuleWithProviders {
    return {
      ngModule: CoreModule,
      providers: [
        {
          provide: HTTP_INTERCEPTORS,
          useClass: CredentialsInterceptor,
          multi: true
        },
        {
          provide: HTTP_INTERCEPTORS,
          useClass: HttpErrorInterceptor,
          multi: true
        }
      ]
    };
  }
}
