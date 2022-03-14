import { Action } from '@ngrx/store';

import * as Kt1302Actions from './kt-1302.actions';
import { Kt1302Entity } from './kt-1302.models';
import { State, initialState, reducer } from './kt-1302.reducer';

describe('Kt1302 Reducer', () => {
  const createKt1302Entity = (id: string, name = ''): Kt1302Entity => ({
    id,
    name: name || `name-${id}`,
  });

  describe('valid Kt1302 actions', () => {
    it('loadKt1302Success should return the list of known Kt1302', () => {
      const kt1302 = [
        createKt1302Entity('PRODUCT-AAA'),
        createKt1302Entity('PRODUCT-zzz'),
      ];
      const action = Kt1302Actions.loadKt1302Success({ kt1302 });

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
