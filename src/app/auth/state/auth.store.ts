import { Injectable } from '@angular/core';
import { Store, StoreConfig } from '@datorama/akita';
import { AuthResult, AuthState, createInitialState, createState } from './auth.model';

@Injectable({
  providedIn: 'root'
})
@StoreConfig({name: 'auth', resettable: true})
export class AuthStore extends Store<AuthState> {

  updateWithAuthResult(result: AuthResult) {
    this.update(createState(result));
  }

  constructor() {
    super(createInitialState());
  }

}
