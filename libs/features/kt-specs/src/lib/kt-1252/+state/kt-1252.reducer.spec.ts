import { Action } from '@ngrx/store';

import * as Kt1252Actions from './kt-1252.actions';
import { Kt1252Entity } from './kt-1252.models';
import { State, initialState, reducer } from './kt-1252.reducer';

describe('Kt1252 Reducer', () => {
  const createKt1252Entity = (id: string, name = ''): Kt1252Entity => ({
    id,
    name: name || `name-${id}`,
  });

  describe('valid Kt1252 actions', () => {
    it('loadKt1252Success should return the list of known Kt1252', () => {
      const kt1252 = [createKt1252Entity('PRODUCT-AAA'), createKt1252Entity('PRODUCT-zzz')];
      const action = Kt1252Actions.loadKt1252Success({ kt1252 });

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
