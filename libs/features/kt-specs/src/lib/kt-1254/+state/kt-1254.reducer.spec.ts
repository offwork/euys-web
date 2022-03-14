import { Action } from '@ngrx/store';

import * as Kt1254Actions from './kt-1254.actions';
import { Kt1254Entity } from './kt-1254.models';
import { State, initialState, reducer } from './kt-1254.reducer';

describe('Kt1254 Reducer', () => {
  const createKt1254Entity = (id: string, name = ''): Kt1254Entity => ({
    id,
    name: name || `name-${id}`,
  });

  describe('valid Kt1254 actions', () => {
    it('loadKt1254Success should return the list of known Kt1254', () => {
      const kt1254 = [createKt1254Entity('PRODUCT-AAA'), createKt1254Entity('PRODUCT-zzz')];
      const action = Kt1254Actions.loadKt1254Success({ kt1254 });

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
