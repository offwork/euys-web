import { Action } from '@ngrx/store';

import * as Kt1237Actions from './kt-1237.actions';
import { Kt1237Entity } from './kt-1237.models';
import { State, initialState, reducer } from './kt-1237.reducer';

describe('Kt1237 Reducer', () => {
  const createKt1237Entity = (id: string, name = ''): Kt1237Entity => ({
    id,
    name: name || `name-${id}`,
  });

  describe('valid Kt1237 actions', () => {
    it('loadKt1237Success should return the list of known Kt1237', () => {
      const kt1237 = [createKt1237Entity('PRODUCT-AAA'), createKt1237Entity('PRODUCT-zzz')];
      const action = Kt1237Actions.loadKt1237Success({ kt1237 });

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
