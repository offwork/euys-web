import { Action } from '@ngrx/store';

import * as Kt1239Actions from './kt-1239.actions';
import { Kt1239Entity } from './kt-1239.models';
import { State, initialState, reducer } from './kt-1239.reducer';

describe('Kt1239 Reducer', () => {
  const createKt1239Entity = (id: string, name = ''): Kt1239Entity => ({
    id,
    name: name || `name-${id}`,
  });

  describe('valid Kt1239 actions', () => {
    it('loadKt1239Success should return the list of known Kt1239', () => {
      const kt1239 = [createKt1239Entity('PRODUCT-AAA'), createKt1239Entity('PRODUCT-zzz')];
      const action = Kt1239Actions.loadKt1239Success({ kt1239 });

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
