import { Action } from '@ngrx/store';

import * as Kt1341Actions from './kt-1341.actions';
import { Kt1341Entity } from './kt-1341.models';
import { State, initialState, reducer } from './kt-1341.reducer';

describe('Kt1341 Reducer', () => {
  const createKt1341Entity = (id: string, name = ''): Kt1341Entity => ({
    id,
    name: name || `name-${id}`,
  });

  describe('valid Kt1341 actions', () => {
    it('loadKt1341Success should return the list of known Kt1341', () => {
      const kt1341 = [
        createKt1341Entity('PRODUCT-AAA'),
        createKt1341Entity('PRODUCT-zzz'),
      ];
      const action = Kt1341Actions.loadKt1341Success({ kt1341 });

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
