import { Action } from '@ngrx/store';

import * as Kt1363Actions from './kt-1363.actions';
import { Kt1363Entity } from './kt-1363.models';
import { State, initialState, reducer } from './kt-1363.reducer';

describe('Kt1363 Reducer', () => {
  const createKt1363Entity = (id: string, name = ''): Kt1363Entity => ({
    id,
    name: name || `name-${id}`,
  });

  describe('valid Kt1363 actions', () => {
    it('loadKt1363Success should return the list of known Kt1363', () => {
      const kt1363 = [
        createKt1363Entity('PRODUCT-AAA'),
        createKt1363Entity('PRODUCT-zzz'),
      ];
      const action = Kt1363Actions.loadKt1363Success({ kt1363 });

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
