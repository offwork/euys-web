import { Action } from '@ngrx/store';

import * as Kt1223Actions from './kt-1223.actions';
import { Kt1223Entity } from './kt-1223.models';
import { State, initialState, reducer } from './kt-1223.reducer';

describe('Kt1223 Reducer', () => {
  const createKt1223Entity = (id: string, name = ''): Kt1223Entity => ({
    id,
    name: name || `name-${id}`,
  });

  describe('valid Kt1223 actions', () => {
    it('loadKt1223Success should return the list of known Kt1223', () => {
      const kt1223 = [createKt1223Entity('PRODUCT-AAA'), createKt1223Entity('PRODUCT-zzz')];
      const action = Kt1223Actions.loadKt1223Success({ kt1223 });

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
