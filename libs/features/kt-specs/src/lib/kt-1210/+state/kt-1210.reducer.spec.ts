import { Action } from '@ngrx/store';

import * as Kt1210Actions from './kt-1210.actions';
import { Kt1210Entity } from './kt-1210.models';
import { State, initialState, reducer } from './kt-1210.reducer';

describe('Kt1210 Reducer', () => {
  const createKt1210Entity = (id: string, name = ''): Kt1210Entity => ({
    id,
    name: name || `name-${id}`,
  });

  describe('valid Kt1210 actions', () => {
    it('loadKt1210Success should return the list of known Kt1210', () => {
      const kt1210 = [createKt1210Entity('PRODUCT-AAA'), createKt1210Entity('PRODUCT-zzz')];
      const action = Kt1210Actions.loadKt1210Success({ kt1210 });

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
