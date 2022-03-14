import { Action } from '@ngrx/store';

import * as Pfdm3102Actions from './pfdm-3102.actions';
import { Pfdm3102Entity } from './pfdm-3102.models';
import { State, initialState, reducer } from './pfdm-3102.reducer';

describe('Pfdm3102 Reducer', () => {
  const createPfdm3102Entity = (id: string, name = ''): Pfdm3102Entity => ({
    id,
    name: name || `name-${id}`,
  });

  describe('valid Pfdm3102 actions', () => {
    it('loadPfdm3102Success should return the list of known Pfdm3102', () => {
      const pfdm3102 = [
        createPfdm3102Entity('PRODUCT-AAA'),
        createPfdm3102Entity('PRODUCT-zzz'),
      ];
      const action = Pfdm3102Actions.loadPfdm3102Success({ pfdm3102 });

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
