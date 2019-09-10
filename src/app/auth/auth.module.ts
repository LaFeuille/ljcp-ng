import { CommonModule } from '@angular/common';
import { ModuleWithProviders, NgModule } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatIconModule } from '@angular/material/icon';
import { JWT_OPTIONS, JwtModule } from '@auth0/angular-jwt';

import { AuthRoutingModule } from './auth-routing.module';
import { AuthGuard } from './auth.guard';
import { CallbackComponent } from './callback/callback.component';
import { IdCardComponent } from './id-card/id-card.component';
import { IdComponent } from './id/id.component';
import { LoginComponent } from './login/login.component';
import { AuthQuery, AuthService, AuthStore, jwtOptionsFactory } from './state';

@NgModule({
  imports: [
    CommonModule,
    AuthRoutingModule,
    JwtModule.forRoot({
      jwtOptionsProvider: {
        provide: JWT_OPTIONS,
        useFactory: jwtOptionsFactory,
        deps: [AuthQuery]
      }
    }),
    MatCardModule,
    MatButtonModule,
    MatIconModule
  ],
  declarations: [
    CallbackComponent,
    LoginComponent,
    IdCardComponent,
    IdComponent
  ]
})
export class AuthModule {
  static forRoot(): ModuleWithProviders {
    return {
      ngModule: AuthModule,
      providers: [
        AuthGuard,
        AuthQuery,
        AuthService,
        AuthStore
      ]
    };
  }
}
