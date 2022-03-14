import { Action } from '@ngrx/store';

import * as Kt1362Actions from './kt-1362.actions';
import { Kt1362Entity } from './kt-1362.models';
import { State, initialState, reducer } from './kt-1362.reducer';

describe('Kt1362 Reducer', () => {
  const createKt1362Entity = (id: string, name = ''): Kt1362Entity => ({
    id,
    name: name || `name-${id}`,
  });

  describe('valid Kt1362 actions', () => {
    it('loadKt1362Success should return the list of known Kt1362', () => {
      const kt1362 = [
        createKt1362Entity('PRODUCT-AAA'),
        createKt1362Entity('PRODUCT-zzz'),
      ];
      const action = Kt1362Actions.loadKt1362Success({ kt1362 });

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
