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
    const state = createState({accessToken: 'abc123', expiresIn: 3600, idToken: '123abc'}, moment('2001-01-01T01Z'));
    expect(state.idToken).toBe('123abc');
    expect(state.accessToken).toBe('abc123');
    expect(state.expiresAt).toBe(978314400000);
  });

  it('should have correct state', () => {
    const state = createState({accessToken: 'abc123', expiresIn: 3600, idToken: '123abc'});
    expect(state.idToken).toBe('123abc');
    expect(state.accessToken).toBe('abc123');
  });
});
