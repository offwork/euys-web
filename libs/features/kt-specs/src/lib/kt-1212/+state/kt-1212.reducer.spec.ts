import { Action } from '@ngrx/store';

import * as Kt1212Actions from './kt-1212.actions';
import { Kt1212Entity } from './kt-1212.models';
import { State, initialState, reducer } from './kt-1212.reducer';

describe('Kt1212 Reducer', () => {
  const createKt1212Entity = (id: string, name = ''): Kt1212Entity => ({
    id,
    name: name || `name-${id}`,
  });

  describe('valid Kt1212 actions', () => {
    it('loadKt1212Success should return the list of known Kt1212', () => {
      const kt1212 = [createKt1212Entity('PRODUCT-AAA'), createKt1212Entity('PRODUCT-zzz')];
      const action = Kt1212Actions.loadKt1212Success({ kt1212 });

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
