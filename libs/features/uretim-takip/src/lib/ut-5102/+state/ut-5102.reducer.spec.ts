import { Action } from '@ngrx/store';

import * as Ut5102Actions from './ut-5102.actions';
import { Ut5102Entity } from './ut-5102.models';
import { State, initialState, reducer } from './ut-5102.reducer';

describe('Ut5102 Reducer', () => {
  const createUt5102Entity = (id: string, name = ''): Ut5102Entity => ({
    id,
    name: name || `name-${id}`,
  });

  describe('valid Ut5102 actions', () => {
    it('loadUt5102Success should return the list of known Ut5102', () => {
      const ut5102 = [
        createUt5102Entity('PRODUCT-AAA'),
        createUt5102Entity('PRODUCT-zzz'),
      ];
      const action = Ut5102Actions.loadUt5102Success({ ut5102 });

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
