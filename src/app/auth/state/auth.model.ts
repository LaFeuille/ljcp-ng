import { JwtHelperService } from '@auth0/angular-jwt';
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
  idToken: IdToken | null;
}

export interface IdToken {
  family_name?: string;
  given_name?: string;
  iss: string;
  locale?: string;
  name?: string;
  nickname?: string;
  picture?: string;
  sub: string;
}

export function createInitialState(): AuthState {
  return {
    accessToken: null,
    expiresAt: null,
    idToken: null
  };
}

export function createState(result: AuthResult, helper: JwtHelperService, now: Moment = moment()): AuthState {
  return {
    accessToken: result.accessToken,
    expiresAt: now.add(result.expiresIn, 'seconds').toDate().getTime(),
    idToken: helper.decodeToken(result.idToken)
  };
}
