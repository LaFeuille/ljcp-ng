import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import * as auth0 from 'auth0-js';
import { Observable } from 'rxjs';
import { map, shareReplay, take } from 'rxjs/operators';
import { ConfigService } from '../../core/config.service';
import { AuthResult } from './auth.model';
import { AuthQuery } from './auth.query';
import { AuthStore } from './auth.store';

export function jwtOptionsFactory(auth: AuthQuery) {
  return {
    tokenGetter: () => {
      return auth.accessToken$.pipe(take(1)).toPromise();
    }
  };
}

@Injectable()
export class AuthService {

  private auth0: Observable<auth0.WebAuth>;

  constructor(config: ConfigService, private router: Router, private store: AuthStore) {
    this.auth0 = config.data.pipe(
      map(props =>
        new auth0.WebAuth({
          clientID: props.auth0ClientId,
          domain: props.auth0Domain,
          responseType: 'token id_token',
          audience: props.auth0Audience,
          redirectUri: props.authCallbackUrl,
          scope: 'openid profile'
        })),
      shareReplay(1)
    );
  }

  login(): void {
    this.auth0.forEach(a => a.authorize());
  }

  handleAuthentication(): void {
    this.auth0.forEach(a => a.parseHash((err, authResult: AuthResult) => {
      if (err) {
        this.store.setError(err);
        this.router.navigate(['/']);
      } else {
        this.store.setError(null);
        this.store.updateWithAuthResult(authResult);
        this.router.navigate(['/']);
      }
    }));
  }

  renewTokens(): void {
    this.auth0.forEach(a => a.checkSession({}, (err, authResult) => {
      if (err) {
        this.store.setError(err);
        this.logout();
      } else {
        this.store.setError(null);
        this.store.updateWithAuthResult(authResult);
      }
    }));
  }

  logout(): void {
    // Remove tokens and expiry time
    this.store.reset();
    // Go back to the home route
    this.router.navigate(['/']);
  }
}
