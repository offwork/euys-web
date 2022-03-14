import { Action } from '@ngrx/store';

import * as Kt1332Actions from './kt-1332.actions';
import { Kt1332Entity } from './kt-1332.models';
import { State, initialState, reducer } from './kt-1332.reducer';

describe('Kt1332 Reducer', () => {
  const createKt1332Entity = (id: string, name = ''): Kt1332Entity => ({
    id,
    name: name || `name-${id}`,
  });

  describe('valid Kt1332 actions', () => {
    it('loadKt1332Success should return the list of known Kt1332', () => {
      const kt1332 = [
        createKt1332Entity('PRODUCT-AAA'),
        createKt1332Entity('PRODUCT-zzz'),
      ];
      const action = Kt1332Actions.loadKt1332Success({ kt1332 });

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
