import { Action } from '@ngrx/store';

import * as Kt1261Actions from './kt-1261.actions';
import { Kt1261Entity } from './kt-1261.models';
import { State, initialState, reducer } from './kt-1261.reducer';

describe('Kt1261 Reducer', () => {
  const createKt1261Entity = (id: string, name = ''): Kt1261Entity => ({
    id,
    name: name || `name-${id}`,
  });

  describe('valid Kt1261 actions', () => {
    it('loadKt1261Success should return the list of known Kt1261', () => {
      const kt1261 = [
        createKt1261Entity('PRODUCT-AAA'),
        createKt1261Entity('PRODUCT-zzz'),
      ];
      const action = Kt1261Actions.loadKt1261Success({ kt1261 });

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
