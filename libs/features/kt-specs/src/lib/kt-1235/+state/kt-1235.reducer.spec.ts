import { Action } from '@ngrx/store';

import * as Kt1235Actions from './kt-1235.actions';
import { Kt1235Entity } from './kt-1235.models';
import { State, initialState, reducer } from './kt-1235.reducer';

describe('Kt1235 Reducer', () => {
  const createKt1235Entity = (id: string, name = ''): Kt1235Entity => ({
    id,
    name: name || `name-${id}`,
  });

  describe('valid Kt1235 actions', () => {
    it('loadKt1235Success should return the list of known Kt1235', () => {
      const kt1235 = [createKt1235Entity('PRODUCT-AAA'), createKt1235Entity('PRODUCT-zzz')];
      const action = Kt1235Actions.loadKt1235Success({ kt1235 });

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
