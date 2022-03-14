import { Action } from '@ngrx/store';

import * as Kt1247Actions from './kt-1247.actions';
import { Kt1247Entity } from './kt-1247.models';
import { State, initialState, reducer } from './kt-1247.reducer';

describe('Kt1247 Reducer', () => {
  const createKt1247Entity = (id: string, name = ''): Kt1247Entity => ({
    id,
    name: name || `name-${id}`,
  });

  describe('valid Kt1247 actions', () => {
    it('loadKt1247Success should return the list of known Kt1247', () => {
      const kt1247 = [createKt1247Entity('PRODUCT-AAA'), createKt1247Entity('PRODUCT-zzz')];
      const action = Kt1247Actions.loadKt1247Success({ kt1247 });

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
