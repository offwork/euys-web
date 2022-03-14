import { Action } from '@ngrx/store';

import * as Kt1207Actions from './kt-1207.actions';
import { Kt1207Entity } from './kt-1207.models';
import { State, initialState, reducer } from './kt-1207.reducer';

describe('Kt1207 Reducer', () => {
  const createKt1207Entity = (id: string, name = ''): Kt1207Entity => ({
    id,
    name: name || `name-${id}`,
  });

  describe('valid Kt1207 actions', () => {
    it('loadKt1207Success should return the list of known Kt1207', () => {
      const kt1207 = [createKt1207Entity('PRODUCT-AAA'), createKt1207Entity('PRODUCT-zzz')];
      const action = Kt1207Actions.loadKt1207Success({ kt1207 });

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
