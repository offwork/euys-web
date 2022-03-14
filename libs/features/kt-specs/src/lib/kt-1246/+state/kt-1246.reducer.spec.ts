import { Action } from '@ngrx/store';

import * as Kt1246Actions from './kt-1246.actions';
import { Kt1246Entity } from './kt-1246.models';
import { State, initialState, reducer } from './kt-1246.reducer';

describe('Kt1246 Reducer', () => {
  const createKt1246Entity = (id: string, name = ''): Kt1246Entity => ({
    id,
    name: name || `name-${id}`,
  });

  describe('valid Kt1246 actions', () => {
    it('loadKt1246Success should return the list of known Kt1246', () => {
      const kt1246 = [createKt1246Entity('PRODUCT-AAA'), createKt1246Entity('PRODUCT-zzz')];
      const action = Kt1246Actions.loadKt1246Success({ kt1246 });

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
