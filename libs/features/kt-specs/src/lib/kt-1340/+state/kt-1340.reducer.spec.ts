import { Action } from '@ngrx/store';

import * as Kt1340Actions from './kt-1340.actions';
import { Kt1340Entity } from './kt-1340.models';
import { State, initialState, reducer } from './kt-1340.reducer';

describe('Kt1340 Reducer', () => {
  const createKt1340Entity = (id: string, name = ''): Kt1340Entity => ({
    id,
    name: name || `name-${id}`,
  });

  describe('valid Kt1340 actions', () => {
    it('loadKt1340Success should return the list of known Kt1340', () => {
      const kt1340 = [
        createKt1340Entity('PRODUCT-AAA'),
        createKt1340Entity('PRODUCT-zzz'),
      ];
      const action = Kt1340Actions.loadKt1340Success({ kt1340 });

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
