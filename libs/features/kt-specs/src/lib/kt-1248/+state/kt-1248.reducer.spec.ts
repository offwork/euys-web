import { Action } from '@ngrx/store';

import * as Kt1248Actions from './kt-1248.actions';
import { Kt1248Entity } from './kt-1248.models';
import { State, initialState, reducer } from './kt-1248.reducer';

describe('Kt1248 Reducer', () => {
  const createKt1248Entity = (id: string, name = ''): Kt1248Entity => ({
    id,
    name: name || `name-${id}`,
  });

  describe('valid Kt1248 actions', () => {
    it('loadKt1248Success should return the list of known Kt1248', () => {
      const kt1248 = [createKt1248Entity('PRODUCT-AAA'), createKt1248Entity('PRODUCT-zzz')];
      const action = Kt1248Actions.loadKt1248Success({ kt1248 });

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
