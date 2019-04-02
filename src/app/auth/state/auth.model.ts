import * as moment from 'moment';

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

export function createState(result: AuthResult): AuthState {
  return {
    accessToken: result.accessToken,
    expiresAt: moment().add(result.expiresIn, 'milliseconds').toDate().getTime(),
    idToken: result.idToken
  };
}
