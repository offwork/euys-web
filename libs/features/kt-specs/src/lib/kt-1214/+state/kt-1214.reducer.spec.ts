import { Action } from '@ngrx/store';

import * as Kt1214Actions from './kt-1214.actions';
import { Kt1214Entity } from './kt-1214.models';
import { State, initialState, reducer } from './kt-1214.reducer';

describe('Kt1214 Reducer', () => {
  const createKt1214Entity = (id: string, name = ''): Kt1214Entity => ({
    id,
    name: name || `name-${id}`,
  });

  describe('valid Kt1214 actions', () => {
    it('loadKt1214Success should return the list of known Kt1214', () => {
      const kt1214 = [createKt1214Entity('PRODUCT-AAA'), createKt1214Entity('PRODUCT-zzz')];
      const action = Kt1214Actions.loadKt1214Success({ kt1214 });

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
