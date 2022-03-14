import { Action } from '@ngrx/store';

import * as Kt1218Actions from './kt-1218.actions';
import { State, initialState, reducer } from './kt-1218.reducer';

describe('Kt1218 Reducer', () => {

  describe('valid Kt1218 actions', () => {
    it('loadKt1218Success should return the list of known Kt1218', () => {
      const action = Kt1218Actions.loadKt1218Success({ cglHavaSogutma: [] });

      const result: State = reducer(initialState, action);

      expect(result.loaded).toBe(true);
    });
  });

  describe('unknown action', () => {
    it('should return the previous state', () => {
      const action = {} as Action;

      const result = reducer(initialState, action);

      expect(result).toBe(initialState);
    });
  });
});
