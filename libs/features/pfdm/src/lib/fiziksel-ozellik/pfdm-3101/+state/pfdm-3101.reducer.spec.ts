import { Action } from '@ngrx/store';

import * as Pfdm3101Actions from './pfdm-3101.actions';
import { Pfdm3101Entity } from './pfdm-3101.models';
import { State, initialState, reducer } from './pfdm-3101.reducer';

describe('Pfdm3101 Reducer', () => {
  const createPfdm3101Entity = (id: string, name = ''): Pfdm3101Entity => ({
    id,
    name: name || `name-${id}`,
  });

  describe('valid Pfdm3101 actions', () => {
    it('loadPfdm3101Success should return the list of known Pfdm3101', () => {
      const pfdm3101 = [
        createPfdm3101Entity('PRODUCT-AAA'),
        createPfdm3101Entity('PRODUCT-zzz'),
      ];
      const action = Pfdm3101Actions.loadPfdm3101Success({ pfdm3101 });

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
