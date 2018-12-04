import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import * as auth0 from 'auth0-js';
import { Observable, Subscription } from 'rxjs';
import { map, shareReplay } from 'rxjs/operators';
import { ConfigService } from '../core/config.service';
import { AuthStore } from './auth-store.service';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  auth0: Observable<auth0.WebAuth>;

  private refreshSub: Subscription;

  constructor(private config: ConfigService, private router: Router, private store: AuthStore) {
    this.auth0 = this.config.data.pipe(
      map(props =>
        new auth0.WebAuth({
          clientID: props.auth0ClientId,
          domain: props.auth0Domain,
          responseType: 'token id_token',
          audience: props.auth0Audience,
          redirectUri: props.authCallbackUrl,
          scope: 'openid'
        })),
      shareReplay(1)
    );
  }

  handleAuthentication(): void {
    this.auth0.forEach(a => a.parseHash((err, result) => {
      if (result && result.accessToken && result.idToken) {
        this.store.store({
          accessToken: result.accessToken,
          idToken: result.idToken,
          expiresAt: result.expiresIn * 1000 + new Date().getTime()
        });
        this.router.navigate(['/']);
      } else if (err) {
        this.router.navigate(['/']);
        console.log(err);
      }
    }));
  }

  isAuthenticated(): boolean {
    return new Date().getTime() < this.store.expiresAt;
  }

  login(): void {
    this.auth0.forEach(a => a.authorize());
  }

  logout(): void {
    // Remove tokens and expiry time from localStorage
    this.store.clear();
    // Go back to the home route
    this.router.navigate(['/']);
  }

  renewToken() {
    this.auth0.forEach(a => a.checkSession({}, (err, result) => {
      if (result && result.accessToken && result.idToken) {
        this.store.store({
          accessToken: result.accessToken,
          idToken: result.idToken,
          expiresAt: result.expiresIn * 1000 + new Date().getTime()
        });
      } else if (err) {
        console.log(err);
      }
    }));
  }

  unscheduleRenewal() {
    if (this.refreshSub) {
      this.refreshSub.unsubscribe();
    }
  }

  get access_token(): string | null {
    return this.store.accessToken;
  }

}
