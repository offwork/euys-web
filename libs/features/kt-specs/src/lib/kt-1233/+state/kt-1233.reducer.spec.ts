import { Action } from '@ngrx/store';

import * as Kt1233Actions from './kt-1233.actions';
import { Kt1233Entity } from './kt-1233.models';
import { State, initialState, reducer } from './kt-1233.reducer';

describe('Kt1233 Reducer', () => {
  const createKt1233Entity = (id: string, name = ''): Kt1233Entity => ({
    id,
    name: name || `name-${id}`,
  });

  describe('valid Kt1233 actions', () => {
    it('loadKt1233Success should return the list of known Kt1233', () => {
      const kt1233 = [createKt1233Entity('PRODUCT-AAA'), createKt1233Entity('PRODUCT-zzz')];
      const action = Kt1233Actions.loadKt1233Success({ kt1233 });

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
