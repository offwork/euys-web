import { Action } from '@ngrx/store';

import * as Kt1304Actions from './kt-1304.actions';
import { Kt1304Entity } from './kt-1304.models';
import { State, initialState, reducer } from './kt-1304.reducer';

describe('Kt1304 Reducer', () => {
  const createKt1304Entity = (id: string, name = ''): Kt1304Entity => ({
    id,
    name: name || `name-${id}`,
  });

  describe('valid Kt1304 actions', () => {
    it('loadKt1304Success should return the list of known Kt1304', () => {
      const kt1304 = [
        createKt1304Entity('PRODUCT-AAA'),
        createKt1304Entity('PRODUCT-zzz'),
      ];
      const action = Kt1304Actions.loadKt1304Success({ kt1304 });

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
