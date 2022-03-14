import { Action } from '@ngrx/store';

import * as Kt1321Actions from './kt-1321.actions';
import { Kt1321Entity } from './kt-1321.models';
import { State, initialState, reducer } from './kt-1321.reducer';

describe('Kt1321 Reducer', () => {
  const createKt1321Entity = (id: string, name = ''): Kt1321Entity => ({
    id,
    name: name || `name-${id}`,
  });

  describe('valid Kt1321 actions', () => {
    it('loadKt1321Success should return the list of known Kt1321', () => {
      const kt1320 = [
        createKt1321Entity('PRODUCT-AAA'),
        createKt1321Entity('PRODUCT-zzz'),
      ];
      const action = Kt1321Actions.loadKt1321Success({ kt1320 });

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
