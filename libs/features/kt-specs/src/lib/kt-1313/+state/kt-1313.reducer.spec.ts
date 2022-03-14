import { Action } from '@ngrx/store';

import * as Kt1313Actions from './kt-1313.actions';
import { Kt1313Entity } from './kt-1313.models';
import { State, initialState, reducer } from './kt-1313.reducer';

describe('Kt1313 Reducer', () => {
  const createKt1313Entity = (id: string, name = ''): Kt1313Entity => ({
    id,
    name: name || `name-${id}`,
  });

  describe('valid Kt1313 actions', () => {
    it('loadKt1313Success should return the list of known Kt1313', () => {
      const kt1313 = [
        createKt1313Entity('PRODUCT-AAA'),
        createKt1313Entity('PRODUCT-zzz'),
      ];
      const action = Kt1313Actions.loadKt1313Success({ kt1313 });

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
