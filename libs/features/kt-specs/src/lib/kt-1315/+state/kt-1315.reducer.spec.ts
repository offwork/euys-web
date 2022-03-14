import { Action } from '@ngrx/store';

import * as Kt1315Actions from './kt-1315.actions';
import { Kt1315Entity } from './kt-1315.models';
import { State, initialState, reducer } from './kt-1315.reducer';

describe('Kt1315 Reducer', () => {
  const createKt1315Entity = (id: string, name = ''): Kt1315Entity => ({
    id,
    name: name || `name-${id}`,
  });

  describe('valid Kt1315 actions', () => {
    it('loadKt1315Success should return the list of known Kt1315', () => {
      const kt1315 = [
        createKt1315Entity('PRODUCT-AAA'),
        createKt1315Entity('PRODUCT-zzz'),
      ];
      const action = Kt1315Actions.loadKt1315Success({ kt1315 });

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
