import { Action } from '@ngrx/store';

import * as Kt1320Actions from './kt-1320.actions';
import { Kt1320Entity } from './kt-1320.models';
import { State, initialState, reducer } from './kt-1320.reducer';

describe('Kt1320 Reducer', () => {
  const createKt1320Entity = (id: string, name = ''): Kt1320Entity => ({
    id,
    name: name || `name-${id}`,
  });

  describe('valid Kt1320 actions', () => {
    it('loadKt1320Success should return the list of known Kt1320', () => {
      const kt1320 = [
        createKt1320Entity('PRODUCT-AAA'),
        createKt1320Entity('PRODUCT-zzz'),
      ];
      const action = Kt1320Actions.loadKt1320Success({ kt1320 });

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
