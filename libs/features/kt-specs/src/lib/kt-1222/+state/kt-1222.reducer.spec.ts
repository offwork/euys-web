import { Action } from '@ngrx/store';

import * as Kt1222Actions from './kt-1222.actions';
import { Kt1222Entity } from './kt-1222.models';
import { State, initialState, reducer } from './kt-1222.reducer';

describe('Kt1222 Reducer', () => {
  const createKt1222Entity = (id: string, name = ''): Kt1222Entity => ({
    id,
    name: name || `name-${id}`,
  });

  describe('valid Kt1222 actions', () => {
    it('loadKt1222Success should return the list of known Kt1222', () => {
      const kt1222 = [createKt1222Entity('PRODUCT-AAA'), createKt1222Entity('PRODUCT-zzz')];
      const action = Kt1222Actions.loadKt1222Success({ kt1222 });

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
