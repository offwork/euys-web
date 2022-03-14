import { Action } from '@ngrx/store';

import * as Kt1330Actions from './kt-1330.actions';
import { Kt1330Entity } from './kt-1330.models';
import { State, initialState, reducer } from './kt-1330.reducer';

describe('Kt1330 Reducer', () => {
  const createKt1330Entity = (id: string, name = ''): Kt1330Entity => ({
    id,
    name: name || `name-${id}`,
  });

  describe('valid Kt1330 actions', () => {
    it('loadKt1330Success should return the list of known Kt1330', () => {
      const kt1331 = [
        createKt1330Entity('PRODUCT-AAA'),
        createKt1330Entity('PRODUCT-zzz'),
      ];
      const action = Kt1330Actions.loadKt1330Success({ kt1331 });

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
