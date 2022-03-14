import { Action } from '@ngrx/store';

import * as Kt1205Actions from './kt-1205.actions';
import { Kt1205Entity } from './kt-1205.models';
import { State, initialState, reducer } from './kt-1205.reducer';

describe('Kt1205 Reducer', () => {
  const createKt1205Entity = (id: string, name = ''): Kt1205Entity => ({
    id,
    name: name || `name-${id}`,
  });

  describe('valid Kt1205 actions', () => {
    it('loadKt1205Success should return the list of known Kt1205', () => {
      const kt1205 = [createKt1205Entity('PRODUCT-AAA'), createKt1205Entity('PRODUCT-zzz')];
      const action = Kt1205Actions.loadKt1205Success({ kt1205 });

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
