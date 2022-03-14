import { Action } from '@ngrx/store';

import * as Kt1203Actions from './kt-1203.actions';
import { Kt1203Entity } from './kt-1203.models';
import { State, initialState, reducer } from './kt-1203.reducer';

describe('Kt1203 Reducer', () => {
  const createKt1203Entity = (id: string, name = ''): Kt1203Entity => ({
    id,
    name: name || `name-${id}`,
  });

  describe('valid Kt1203 actions', () => {
    it('loadKt1203Success should return the list of known Kt1203', () => {
      const kt1203 = [createKt1203Entity('PRODUCT-AAA'), createKt1203Entity('PRODUCT-zzz')];
      const action = Kt1203Actions.loadKt1203Success({ kt1203 });

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
