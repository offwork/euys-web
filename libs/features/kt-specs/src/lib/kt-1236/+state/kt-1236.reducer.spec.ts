import { Action } from '@ngrx/store';

import * as Kt1236Actions from './kt-1236.actions';
import { Kt1236Entity } from './kt-1236.models';
import { State, initialState, reducer } from './kt-1236.reducer';

describe('Kt1236 Reducer', () => {
  const createKt1236Entity = (id: string, name = ''): Kt1236Entity => ({
    id,
    name: name || `name-${id}`,
  });

  describe('valid Kt1236 actions', () => {
    it('loadKt1236Success should return the list of known Kt1236', () => {
      const kt1236 = [createKt1236Entity('PRODUCT-AAA'), createKt1236Entity('PRODUCT-zzz')];
      const action = Kt1236Actions.loadKt1236Success({ kt1236 });

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
