import { Action } from '@ngrx/store';

import * as Kt1243Actions from './kt-1243.actions';
import { Kt1243Entity } from './kt-1243.models';
import { State, initialState, reducer } from './kt-1243.reducer';

describe('Kt1243 Reducer', () => {
  const createKt1243Entity = (id: string, name = ''): Kt1243Entity => ({
    id,
    name: name || `name-${id}`,
  });

  describe('valid Kt1243 actions', () => {
    it('loadKt1243Success should return the list of known Kt1243', () => {
      const kt1243 = [createKt1243Entity('PRODUCT-AAA'), createKt1243Entity('PRODUCT-zzz')];
      const action = Kt1243Actions.loadKt1243Success({ kt1243 });

      const result: State = reducer(initialState, action);

      expect(result.loaded).toBe(true);
      expect(result.ids.length).toBe(2);
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
