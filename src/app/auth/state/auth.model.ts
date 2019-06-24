import * as moment from 'moment';
import { Moment } from 'moment';

export interface AuthResult {
  accessToken: string;
  expiresIn: number;
  idToken: string;
}

export interface AuthState {
  accessToken: string | null;
  expiresAt: number | null;
  idToken: string | null;
}

export function createInitialState(): AuthState {
  return {
    accessToken: null,
    expiresAt: null,
    idToken: null
  };
}

export function createState(result: AuthResult, now: Moment = moment()): AuthState {
  return {
    accessToken: result.accessToken,
    expiresAt: now.add(result.expiresIn, 'seconds').toDate().getTime(),
    idToken: result.idToken
  };
}
