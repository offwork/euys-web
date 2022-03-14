import { Action } from '@ngrx/store';

import * as Kt1231Actions from './kt-1231.actions';
import { Kt1231Entity } from './kt-1231.models';
import { State, initialState, reducer } from './kt-1231.reducer';

describe('Kt1231 Reducer', () => {
  const createKt1231Entity = (id: string, name = ''): Kt1231Entity => ({
    id,
    name: name || `name-${id}`,
  });

  describe('valid Kt1231 actions', () => {
    it('loadKt1231Success should return the list of known Kt1231', () => {
      const kt1231 = [createKt1231Entity('PRODUCT-AAA'), createKt1231Entity('PRODUCT-zzz')];
      const action = Kt1231Actions.loadKt1231Success({ kt1231 });

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
