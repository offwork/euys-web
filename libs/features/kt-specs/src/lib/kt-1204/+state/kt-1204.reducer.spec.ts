import { Action } from '@ngrx/store';

import * as Kt1204Actions from './kt-1204.actions';
import { Kt1204Entity } from './kt-1204.models';
import { State, initialState, reducer } from './kt-1204.reducer';

describe('Kt1204 Reducer', () => {
  const createKt1204Entity = (id: string, name = ''): Kt1204Entity => ({
    id,
    name: name || `name-${id}`,
  });

  describe('valid Kt1204 actions', () => {
    it('loadKt1204Success should return the list of known Kt1204', () => {
      const kt1204 = [createKt1204Entity('PRODUCT-AAA'), createKt1204Entity('PRODUCT-zzz')];
      const action = Kt1204Actions.loadKt1204Success({ kt1204 });

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
