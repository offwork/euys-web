import { Action } from '@ngrx/store';

import * as Kt1364Actions from './kt-1364.actions';
import { Kt1364Entity } from './kt-1364.models';
import { State, initialState, reducer } from './kt-1364.reducer';

describe('Kt1364 Reducer', () => {
  const createKt1364Entity = (id: string, name = ''): Kt1364Entity => ({
    id,
    name: name || `name-${id}`,
  });

  describe('valid Kt1364 actions', () => {
    it('loadKt1364Success should return the list of known Kt1364', () => {
      const kt1364 = [
        createKt1364Entity('PRODUCT-AAA'),
        createKt1364Entity('PRODUCT-zzz'),
      ];
      const action = Kt1364Actions.loadKt1364Success({ kt1364 });

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
