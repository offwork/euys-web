import { Action } from '@ngrx/store';

import * as Kt1253Actions from './kt-1253.actions';
import { Kt1253Entity } from './kt-1253.models';
import { State, initialState, reducer } from './kt-1253.reducer';

describe('Kt1253 Reducer', () => {
  const createKt1253Entity = (id: string, name = ''): Kt1253Entity => ({
    id,
    name: name || `name-${id}`,
  });

  describe('valid Kt1253 actions', () => {
    it('loadKt1253Success should return the list of known Kt1253', () => {
      const kt1253 = [createKt1253Entity('PRODUCT-AAA'), createKt1253Entity('PRODUCT-zzz')];
      const action = Kt1253Actions.loadKt1253Success({ kt1253 });

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
