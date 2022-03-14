import { Action } from '@ngrx/store';

import * as Kt1314Actions from './kt-1314.actions';
import { Kt1314Entity } from './kt-1314.models';
import { State, initialState, reducer } from './kt-1314.reducer';

describe('Kt1314 Reducer', () => {
  const createKt1314Entity = (id: string, name = ''): Kt1314Entity => ({
    id,
    name: name || `name-${id}`,
  });

  describe('valid Kt1314 actions', () => {
    it('loadKt1314Success should return the list of known Kt1314', () => {
      const kt1314 = [
        createKt1314Entity('PRODUCT-AAA'),
        createKt1314Entity('PRODUCT-zzz'),
      ];
      const action = Kt1314Actions.loadKt1314Success({ kt1314 });

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
