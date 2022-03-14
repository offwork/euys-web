import { Action } from '@ngrx/store';

import * as Kt1318Actions from './kt-1318.actions';
import { Kt1318Entity } from './kt-1318.models';
import { State, initialState, reducer } from './kt-1318.reducer';

describe('Kt1318 Reducer', () => {
  const createKt1318Entity = (id: string, name = ''): Kt1318Entity => ({
    id,
    name: name || `name-${id}`,
  });

  describe('valid Kt1318 actions', () => {
    it('loadKt1318Success should return the list of known Kt1318', () => {
      const kt1318 = [
        createKt1318Entity('PRODUCT-AAA'),
        createKt1318Entity('PRODUCT-zzz'),
      ];
      const action = Kt1318Actions.loadKt1318Success({ kt1318 });

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
