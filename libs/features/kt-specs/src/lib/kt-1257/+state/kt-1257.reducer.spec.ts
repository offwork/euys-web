import { Action } from '@ngrx/store';

import * as Kt1257Actions from './kt-1257.actions';
import { Kt1257Entity } from './kt-1257.models';
import { State, initialState, reducer } from './kt-1257.reducer';

describe('Kt1257 Reducer', () => {
  const createKt1257Entity = (id: string, name = ''): Kt1257Entity => ({
    id,
    name: name || `name-${id}`,
  });

  describe('valid Kt1257 actions', () => {
    it('loadKt1257Success should return the list of known Kt1257', () => {
      const kt1257 = [createKt1257Entity('PRODUCT-AAA'), createKt1257Entity('PRODUCT-zzz')];
      const action = Kt1257Actions.loadKt1257Success({ kt1257 });

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
