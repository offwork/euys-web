import { Action } from '@ngrx/store';

import * as Kt1238Actions from './kt-1238.actions';
import { Kt1238Entity } from './kt-1238.models';
import { State, initialState, reducer } from './kt-1238.reducer';

describe('Kt1238 Reducer', () => {
  const createKt1238Entity = (id: string, name = ''): Kt1238Entity => ({
    id,
    name: name || `name-${id}`,
  });

  describe('valid Kt1238 actions', () => {
    it('loadKt1238Success should return the list of known Kt1238', () => {
      const kt1238 = [createKt1238Entity('PRODUCT-AAA'), createKt1238Entity('PRODUCT-zzz')];
      const action = Kt1238Actions.loadKt1238Success({ kt1238 });

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
