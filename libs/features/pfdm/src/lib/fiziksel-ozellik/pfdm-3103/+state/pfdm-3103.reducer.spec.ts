import { Action } from '@ngrx/store';

import * as Pfdm3103Actions from './pfdm-3103.actions';
import { Pfdm3103Entity } from './pfdm-3103.models';
import { State, initialState, reducer } from './pfdm-3103.reducer';

describe('Pfdm3103 Reducer', () => {
  const createPfdm3103Entity = (id: string, name = ''): Pfdm3103Entity => ({
    id,
    name: name || `name-${id}`,
  });

  describe('valid Pfdm3103 actions', () => {
    it('loadPfdm3103Success should return the list of known Pfdm3103', () => {
      const pfdm3103 = [
        createPfdm3103Entity('PRODUCT-AAA'),
        createPfdm3103Entity('PRODUCT-zzz'),
      ];
      const action = Pfdm3103Actions.loadPfdm3103Success({ pfdm3103 });

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
