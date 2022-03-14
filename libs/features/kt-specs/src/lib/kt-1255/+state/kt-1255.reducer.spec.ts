import { Action } from '@ngrx/store';

import * as Kt1255Actions from './kt-1255.actions';
import { Kt1255Entity } from './kt-1255.models';
import { State, initialState, reducer } from './kt-1255.reducer';

describe('Kt1255 Reducer', () => {
  const createKt1255Entity = (id: string, name = ''): Kt1255Entity => ({
    id,
    name: name || `name-${id}`,
  });

  describe('valid Kt1255 actions', () => {
    it('loadKt1255Success should return the list of known Kt1255', () => {
      const kt1255 = [createKt1255Entity('PRODUCT-AAA'), createKt1255Entity('PRODUCT-zzz')];
      const action = Kt1255Actions.loadKt1255Success({ kt1255 });

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
