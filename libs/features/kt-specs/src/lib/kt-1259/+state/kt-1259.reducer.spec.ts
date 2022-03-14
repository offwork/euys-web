import { Action } from '@ngrx/store';

import * as Kt1259Actions from './kt-1259.actions';
import { Kt1259Entity } from './kt-1259.models';
import { State, initialState, reducer } from './kt-1259.reducer';

describe('Kt1259 Reducer', () => {
  const createKt1259Entity = (id: string, name = ''): Kt1259Entity => ({
    id,
    name: name || `name-${id}`,
  });

  describe('valid Kt1259 actions', () => {
    it('loadKt1259Success should return the list of known Kt1259', () => {
      const kt1259 = [
        createKt1259Entity('PRODUCT-AAA'),
        createKt1259Entity('PRODUCT-zzz'),
      ];
      const action = Kt1259Actions.loadKt1259Success({ kt1259 });

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
