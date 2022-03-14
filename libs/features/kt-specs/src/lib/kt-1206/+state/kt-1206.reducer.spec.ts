import { Action } from '@ngrx/store';

import * as Kt1206Actions from './kt-1206.actions';
import { Kt1206Entity } from './kt-1206.models';
import { State, initialState, reducer } from './kt-1206.reducer';

describe('Kt1206 Reducer', () => {
  const createKt1206Entity = (id: string, name = ''): Kt1206Entity => ({
    id,
    name: name || `name-${id}`,
  });

  describe('valid Kt1206 actions', () => {
    it('loadKt1206Success should return the list of known Kt1206', () => {
      const kt1206 = [createKt1206Entity('PRODUCT-AAA'), createKt1206Entity('PRODUCT-zzz')];
      const action = Kt1206Actions.loadKt1206Success({ kt1206 });

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
