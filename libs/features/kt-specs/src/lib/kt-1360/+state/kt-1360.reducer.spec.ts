import { Action } from '@ngrx/store';

import * as Kt1360Actions from './kt-1360.actions';
import { Kt1360Entity } from './kt-1360.models';
import { State, initialState, reducer } from './kt-1360.reducer';

describe('Kt1360 Reducer', () => {
  const createKt1360Entity = (id: string, name = ''): Kt1360Entity => ({
    id,
    name: name || `name-${id}`,
  });

  describe('valid Kt1360 actions', () => {
    it('loadKt1360Success should return the list of known Kt1360', () => {
      const kt1360 = [
        createKt1360Entity('PRODUCT-AAA'),
        createKt1360Entity('PRODUCT-zzz'),
      ];
      const action = Kt1360Actions.loadKt1360Success({ kt1360 });

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
