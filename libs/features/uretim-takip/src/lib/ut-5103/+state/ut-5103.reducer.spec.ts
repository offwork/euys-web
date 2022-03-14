import { Action } from '@ngrx/store';

import * as Ut5103Actions from './ut-5103.actions';
import { Ut5103Entity } from './ut-5103.models';
import { State, initialState, reducer } from './ut-5103.reducer';

describe('Ut5103 Reducer', () => {
  const createUt5103Entity = (id: string, name = ''): Ut5103Entity => ({
    id,
    name: name || `name-${id}`,
  });

  describe('valid Ut5103 actions', () => {
    it('loadUt5103Success should return the list of known Ut5103', () => {
      const ut5103 = [
        createUt5103Entity('PRODUCT-AAA'),
        createUt5103Entity('PRODUCT-zzz'),
      ];
      const action = Ut5103Actions.loadUt5103Success({ ut5103 });

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
