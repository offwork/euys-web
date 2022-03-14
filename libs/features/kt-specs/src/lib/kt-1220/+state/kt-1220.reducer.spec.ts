import { Action } from '@ngrx/store';

import * as Kt1220Actions from './kt-1220.actions';
import { Kt1220Entity } from './kt-1220.models';
import { State, initialState, reducer } from './kt-1220.reducer';

describe('Kt1220 Reducer', () => {
  const createKt1220Entity = (id: string, name = ''): Kt1220Entity => ({
    id,
    name: name || `name-${id}`,
  });

  describe('valid Kt1220 actions', () => {
    it('loadKt1220Success should return the list of known Kt1220', () => {
      const kt1220 = [createKt1220Entity('PRODUCT-AAA'), createKt1220Entity('PRODUCT-zzz')];
      const action = Kt1220Actions.loadKt1220Success({ kt1220 });

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
