import { Action } from '@ngrx/store';

import * as Kt1234Actions from './kt-1234.actions';
import { Kt1234Entity } from './kt-1234.models';
import { State, initialState, reducer } from './kt-1234.reducer';

describe('Kt1234 Reducer', () => {
  const createKt1234Entity = (id: string, name = ''): Kt1234Entity => ({
    id,
    name: name || `name-${id}`,
  });

  describe('valid Kt1234 actions', () => {
    it('loadKt1234Success should return the list of known Kt1234', () => {
      const kt1234 = [createKt1234Entity('PRODUCT-AAA'), createKt1234Entity('PRODUCT-zzz')];
      const action = Kt1234Actions.loadKt1234Success({ kt1234 });

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
