import { Action } from '@ngrx/store';

import * as Kt1225Actions from './kt-1225.actions';
import { Kt1225Entity } from './kt-1225.models';
import { State, initialState, reducer } from './kt-1225.reducer';

describe('Kt1225 Reducer', () => {
  const createKt1225Entity = (id: string, name = ''): Kt1225Entity => ({
    id,
    name: name || `name-${id}`,
  });

  describe('valid Kt1225 actions', () => {
    it('loadKt1225Success should return the list of known Kt1225', () => {
      const kt1225 = [createKt1225Entity('PRODUCT-AAA'), createKt1225Entity('PRODUCT-zzz')];
      const action = Kt1225Actions.loadKt1225Success({ kt1225 });

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
