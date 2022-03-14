import { Action } from '@ngrx/store';

import * as Kt1241Actions from './kt-1241.actions';
import { Kt1241Entity } from './kt-1241.models';
import { State, initialState, reducer } from './kt-1241.reducer';

describe('Kt1241 Reducer', () => {
  const createKt1241Entity = (id: string, name = ''): Kt1241Entity => ({
    id,
    name: name || `name-${id}`,
  });

  describe('valid Kt1241 actions', () => {
    it('loadKt1241Success should return the list of known Kt1241', () => {
      const kt1241 = [createKt1241Entity('PRODUCT-AAA'), createKt1241Entity('PRODUCT-zzz')];
      const action = Kt1241Actions.loadKt1241Success({ kt1241 });

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
