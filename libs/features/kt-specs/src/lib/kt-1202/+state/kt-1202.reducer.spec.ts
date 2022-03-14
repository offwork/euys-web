import { Action } from '@ngrx/store';

import * as Kt1202Actions from './kt-1202.actions';
import { Kt1202Entity } from './kt-1202.models';
import { State, initialState, reducer } from './kt-1202.reducer';

describe('Kt1202 Reducer', () => {
  const createKt1202Entity = (id: string, name = ''): Kt1202Entity => ({
    id,
    name: name || `name-${id}`,
  });

  describe('valid Kt1202 actions', () => {
    it('loadKt1202Success should return the list of known Kt1202', () => {
      const kt1202 = [createKt1202Entity('PRODUCT-AAA'), createKt1202Entity('PRODUCT-zzz')];
      const action = Kt1202Actions.loadKt1202Success({ kt1202 });

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
