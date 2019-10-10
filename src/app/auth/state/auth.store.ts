import { Injectable } from '@angular/core';
import { JwtHelperService } from '@auth0/angular-jwt';
import { Store, StoreConfig } from '@datorama/akita';
import { AuthResult, AuthState, createInitialState, createState } from './auth.model';

@Injectable()
@StoreConfig({name: 'auth', resettable: true})
export class AuthStore extends Store<AuthState> {

  private readonly helper: JwtHelperService;

  updateWithAuthResult(result: AuthResult) {
    this.update(createState(result, this.helper));
  }

  constructor() {
    super(createInitialState());
    this.helper = new JwtHelperService();
  }

}
