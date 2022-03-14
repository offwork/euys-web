import { Action } from '@ngrx/store';

import * as Kt1219Actions from './kt-1219.actions';
import { Kt1219Entity } from './kt-1219.models';
import { State, initialState, reducer } from './kt-1219.reducer';

describe('Kt1219 Reducer', () => {
  const createKt1219Entity = (id: string, name = ''): Kt1219Entity => ({
    id,
    name: name || `name-${id}`,
  });

  describe('valid Kt1219 actions', () => {
    it('loadKt1219Success should return the list of known Kt1219', () => {
      const kt1219 = [createKt1219Entity('PRODUCT-AAA'), createKt1219Entity('PRODUCT-zzz')];
      const action = Kt1219Actions.loadKt1219Success({ kt1219 });

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
