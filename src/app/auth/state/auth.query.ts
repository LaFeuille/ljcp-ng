import { Injectable } from '@angular/core';
import { Query } from '@datorama/akita';
import { AuthState } from './auth.model';
import { AuthStore } from './auth.store';

@Injectable()
export class AuthQuery extends Query<AuthState> {

  accessToken$ = this.select('accessToken');

  idToken$ = this.select('idToken');

  isAuthenticated$ = this.select(state => !!state.expiresAt && state.expiresAt > Date.now());

  isLoggedIn$ = this.select(store => !!store.accessToken);

  constructor(protected store: AuthStore) {
    super(store);
  }

  get accessToken() {
    return this.getValue().accessToken;
  }

}
