import { Action } from '@ngrx/store';

import * as Kt1211Actions from './kt-1211.actions';
import { Kt1211Entity } from './kt-1211.models';
import { State, initialState, reducer } from './kt-1211.reducer';

describe('Kt1211 Reducer', () => {
  const createKt1211Entity = (id: string, name = ''): Kt1211Entity => ({
    id,
    name: name || `name-${id}`,
  });

  describe('valid Kt1211 actions', () => {
    it('loadKt1211Success should return the list of known Kt1211', () => {
      const kt1211 = [createKt1211Entity('PRODUCT-AAA'), createKt1211Entity('PRODUCT-zzz')];
      const action = Kt1211Actions.loadKt1211Success({ kt1211 });

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
