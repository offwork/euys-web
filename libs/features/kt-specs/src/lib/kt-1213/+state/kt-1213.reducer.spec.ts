import { Action } from '@ngrx/store';

import * as Kt1213Actions from './kt-1213.actions';
import { Kt1213Entity } from './kt-1213.models';
import { State, initialState, reducer } from './kt-1213.reducer';

describe('Kt1213 Reducer', () => {
  const createKt1213Entity = (id: string, name = ''): Kt1213Entity => ({
    id,
    name: name || `name-${id}`,
  });

  describe('valid Kt1213 actions', () => {
    it('loadKt1213Success should return the list of known Kt1213', () => {
      const kt1213 = [createKt1213Entity('PRODUCT-AAA'), createKt1213Entity('PRODUCT-zzz')];
      const action = Kt1213Actions.loadKt1213Success({ kt1213 });

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
