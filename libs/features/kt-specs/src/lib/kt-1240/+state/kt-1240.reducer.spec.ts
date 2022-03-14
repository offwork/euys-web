import { Action } from '@ngrx/store';

import * as Kt1240Actions from './kt-1240.actions';
import { Kt1240Entity } from './kt-1240.models';
import { State, initialState, reducer } from './kt-1240.reducer';

describe('Kt1240 Reducer', () => {
  const createKt1240Entity = (id: string, name = ''): Kt1240Entity => ({
    id,
    name: name || `name-${id}`,
  });

  describe('valid Kt1240 actions', () => {
    it('loadKt1240Success should return the list of known Kt1240', () => {
      const kt1240 = [createKt1240Entity('PRODUCT-AAA'), createKt1240Entity('PRODUCT-zzz')];
      const action = Kt1240Actions.loadKt1240Success({ kt1240 });

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
