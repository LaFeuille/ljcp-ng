import * as moment from 'moment';
import { createInitialState, createState } from './auth.model';

describe('Auth Model createInitialState()', () => {
  it('should have empty state', () => {
    const state = createInitialState();
    for (const prop in state) {
      if (state.hasOwnProperty(prop)) {
        expect(state[prop]).toBeNull();
      }
    }
  });
});

describe('Auth Model createState()', () => {
  it('should have correct state when called with fixed date', () => {
    const idToken = {
      sub: '1234567890',
      iss: 'https://accounts.google.com',
      aud: '123-abc.apps.googleusercontent.com',
      iat: 233366400,
      exp: 233370000,
      name: 'Jan Jansen',
      given_name: 'Jan',
      family_name: 'Jansen',
      email: 'jan@gmail.com',
      locale: 'en_US'
    };

    const helper = jasmine.createSpyObj('helper', ['decodeToken']);
    helper.decodeToken.and.callFake(() => idToken);

    const state = createState({
      accessToken: 'abc123',
      expiresIn: 3600,
      idToken: '123abc'
    }, helper, moment('2001-01-01T01Z'));
    expect(state.idToken).toBe(idToken);
    expect(state.accessToken).toBe('abc123');
    expect(state.expiresAt).toBe(978314400000);
  });
});
