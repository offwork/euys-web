import { Action } from '@ngrx/store';

import * as Ut5107Actions from './ut-5107.actions';
import { Ut5107Entity } from './ut-5107.models';
import { State, initialState, reducer } from './ut-5107.reducer';

describe('Ut5107 Reducer', () => {
  const createUt5107Entity = (id: string, name = ''): Ut5107Entity => ({
    id,
    name: name || `name-${id}`,
  });

  describe('valid Ut5107 actions', () => {
    it('loadUt5107Success should return the list of known Ut5107', () => {
      const ut5107 = [
        createUt5107Entity('PRODUCT-AAA'),
        createUt5107Entity('PRODUCT-zzz'),
      ];
      const action = Ut5107Actions.loadUt5107Success({ ut5107 });

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
