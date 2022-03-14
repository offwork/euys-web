import { Action } from '@ngrx/store';

import * as Kt1319Actions from './kt-1319.actions';
import { Kt1319Entity } from './kt-1319.models';
import { State, initialState, reducer } from './kt-1319.reducer';

describe('Kt1319 Reducer', () => {
  const createKt1319Entity = (id: string, name = ''): Kt1319Entity => ({
    id,
    name: name || `name-${id}`,
  });

  describe('valid Kt1319 actions', () => {
    it('loadKt1319Success should return the list of known Kt1319', () => {
      const kt1319 = [
        createKt1319Entity('PRODUCT-AAA'),
        createKt1319Entity('PRODUCT-zzz'),
      ];
      const action = Kt1319Actions.loadKt1319Success({ kt1319 });

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
