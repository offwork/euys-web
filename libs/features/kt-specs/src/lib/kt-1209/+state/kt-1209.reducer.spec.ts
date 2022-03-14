import { Action } from '@ngrx/store';

import * as Kt1209Actions from './kt-1209.actions';
import { Kt1209Entity } from './kt-1209.models';
import { State, initialState, reducer } from './kt-1209.reducer';

describe('Kt1209 Reducer', () => {
  const createKt1209Entity = (id: string, name = ''): Kt1209Entity => ({
    id,
    name: name || `name-${id}`,
  });

  describe('valid Kt1209 actions', () => {
    it('loadKt1209Success should return the list of known Kt1209', () => {
      const kt1209 = [createKt1209Entity('PRODUCT-AAA'), createKt1209Entity('PRODUCT-zzz')];
      const action = Kt1209Actions.loadKt1209Success({ kt1209 });

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
