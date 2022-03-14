import { Action } from '@ngrx/store';

import * as Kt1344Actions from './kt-1344.actions';
import { Kt1344Entity } from './kt-1344.models';
import { State, initialState, reducer } from './kt-1344.reducer';

describe('Kt1344 Reducer', () => {
  const createKt1344Entity = (id: string, name = ''): Kt1344Entity => ({
    id,
    name: name || `name-${id}`,
  });

  describe('valid Kt1344 actions', () => {
    it('loadKt1344Success should return the list of known Kt1344', () => {
      const kt1344 = [
        createKt1344Entity('PRODUCT-AAA'),
        createKt1344Entity('PRODUCT-zzz'),
      ];
      const action = Kt1344Actions.loadKt1344Success({ kt1344 });

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
