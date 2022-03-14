import { Action } from '@ngrx/store';

import * as Kt1226Actions from './kt-1226.actions';
import { Kt1226Entity } from './kt-1226.models';
import { State, initialState, reducer } from './kt-1226.reducer';

describe('Kt1226 Reducer', () => {
  const createKt1226Entity = (id: string, name = ''): Kt1226Entity => ({
    id,
    name: name || `name-${id}`,
  });

  describe('valid Kt1226 actions', () => {
    it('loadKt1226Success should return the list of known Kt1226', () => {
      const kt1226 = [createKt1226Entity('PRODUCT-AAA'), createKt1226Entity('PRODUCT-zzz')];
      const action = Kt1226Actions.loadKt1226Success({ kt1226 });

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
