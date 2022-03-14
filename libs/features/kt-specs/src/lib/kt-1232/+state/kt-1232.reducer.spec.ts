import { Action } from '@ngrx/store';

import * as Kt1232Actions from './kt-1232.actions';
import { Kt1232Entity } from './kt-1232.models';
import { State, initialState, reducer } from './kt-1232.reducer';

describe('Kt1232 Reducer', () => {
  const createKt1232Entity = (id: string, name = ''): Kt1232Entity => ({
    id,
    name: name || `name-${id}`,
  });

  describe('valid Kt1232 actions', () => {
    it('loadKt1232Success should return the list of known Kt1232', () => {
      const kt1232 = [createKt1232Entity('PRODUCT-AAA'), createKt1232Entity('PRODUCT-zzz')];
      const action = Kt1232Actions.loadKt1232Success({ kt1232 });

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
