import { Action } from '@ngrx/store';

import * as Kt1217Actions from './kt-1217.actions';
import { State, initialState, reducer } from './kt-1217.reducer';

describe('Kt1217 Reducer', () => {
  describe('valid Kt1217 actions', () => {
    it('loadKt1217Success should return the list of known Kt1217', () => {
      const action = Kt1217Actions.loadKt1217Success({ calYuzdeUzama: [] });

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
