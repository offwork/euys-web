import { Action } from '@ngrx/store';

import * as Kt1224Actions from './kt-1224.actions';
import { Kt1224Entity } from './kt-1224.models';
import { State, initialState, reducer } from './kt-1224.reducer';

describe('Kt1224 Reducer', () => {
  const createKt1224Entity = (id: string, name = ''): Kt1224Entity => ({
    id,
    name: name || `name-${id}`,
  });

  describe('valid Kt1224 actions', () => {
    it('loadKt1224Success should return the list of known Kt1224', () => {
      const kt1224 = [createKt1224Entity('PRODUCT-AAA'), createKt1224Entity('PRODUCT-zzz')];
      const action = Kt1224Actions.loadKt1224Success({ kt1224 });

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
