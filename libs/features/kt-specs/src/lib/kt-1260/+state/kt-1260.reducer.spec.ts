import { Action } from '@ngrx/store';

import * as Kt1260Actions from './kt-1260.actions';
import { Kt1260Entity } from './kt-1260.models';
import { State, initialState, reducer } from './kt-1260.reducer';

describe('Kt1260 Reducer', () => {
  const createKt1260Entity = (id: string, name = ''): Kt1260Entity => ({
    id,
    name: name || `name-${id}`,
  });

  describe('valid Kt1260 actions', () => {
    it('loadKt1260Success should return the list of known Kt1260', () => {
      const kt1260 = [
        createKt1260Entity('PRODUCT-AAA'),
        createKt1260Entity('PRODUCT-zzz'),
      ];
      const action = Kt1260Actions.loadKt1260Success({ kt1260 });

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
