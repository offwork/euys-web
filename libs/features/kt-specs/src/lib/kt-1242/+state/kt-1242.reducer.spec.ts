import { Action } from '@ngrx/store';

import * as Kt1242Actions from './kt-1242.actions';
import { Kt1242Entity } from './kt-1242.models';
import { State, initialState, reducer } from './kt-1242.reducer';

describe('Kt1242 Reducer', () => {
  const createKt1242Entity = (id: string, name = ''): Kt1242Entity => ({
    id,
    name: name || `name-${id}`,
  });

  describe('valid Kt1242 actions', () => {
    it('loadKt1242Success should return the list of known Kt1242', () => {
      const kt1242 = [createKt1242Entity('PRODUCT-AAA'), createKt1242Entity('PRODUCT-zzz')];
      const action = Kt1242Actions.loadKt1242Success({ kt1242 });

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
