import { Injectable } from '@angular/core';
import { CanActivate, Router, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { AuthQuery } from './state';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {

  constructor(private query: AuthQuery, private router: Router) {
  }

  canActivate(): Observable<boolean | UrlTree> {
    return this.query.isAuthenticated$.pipe(
      map(authenticated => {
          if (authenticated) {
            return true;
          } else {
            return this.router.createUrlTree(['login']);
          }
        }
      )
    );
  }
}
