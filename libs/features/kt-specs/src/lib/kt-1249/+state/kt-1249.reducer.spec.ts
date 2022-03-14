import { Action } from '@ngrx/store';

import * as Kt1249Actions from './kt-1249.actions';
import { Kt1249Entity } from './kt-1249.models';
import { State, initialState, reducer } from './kt-1249.reducer';

describe('Kt1249 Reducer', () => {
  const createKt1249Entity = (id: string, name = ''): Kt1249Entity => ({
    id,
    name: name || `name-${id}`,
  });

  describe('valid Kt1249 actions', () => {
    it('loadKt1249Success should return the list of known Kt1249', () => {
      const kt1249 = [createKt1249Entity('PRODUCT-AAA'), createKt1249Entity('PRODUCT-zzz')];
      const action = Kt1249Actions.loadKt1249Success({ kt1249 });

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
