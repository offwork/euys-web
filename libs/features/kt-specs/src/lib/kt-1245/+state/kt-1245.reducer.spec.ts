import { Action } from '@ngrx/store';

import * as Kt1245Actions from './kt-1245.actions';
import { Kt1245Entity } from './kt-1245.models';
import { State, initialState, reducer } from './kt-1245.reducer';

describe('Kt1245 Reducer', () => {
  const createKt1245Entity = (id: string, name = ''): Kt1245Entity => ({
    id,
    name: name || `name-${id}`,
  });

  describe('valid Kt1245 actions', () => {
    it('loadKt1245Success should return the list of known Kt1245', () => {
      const kt1245 = [createKt1245Entity('PRODUCT-AAA'), createKt1245Entity('PRODUCT-zzz')];
      const action = Kt1245Actions.loadKt1245Success({ kt1245 });

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
