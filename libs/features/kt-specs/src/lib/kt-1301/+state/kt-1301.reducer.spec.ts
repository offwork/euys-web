import { Action } from '@ngrx/store';

import * as Kt1301Actions from './kt-1301.actions';
import { Kt1301Entity } from './kt-1301.models';
import { State, initialState, reducer } from './kt-1301.reducer';

describe('Kt1301 Reducer', () => {
  const createKt1301Entity = (id: string, name = ''): Kt1301Entity => ({
    id,
    name: name || `name-${id}`,
  });

  describe('valid Kt1301 actions', () => {
    it('loadKt1301Success should return the list of known Kt1301', () => {
      const kt1301 = [
        createKt1301Entity('PRODUCT-AAA'),
        createKt1301Entity('PRODUCT-zzz'),
      ];
      const action = Kt1301Actions.loadKt1301Success({ kt1301 });

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
