import { Action } from '@ngrx/store';

import * as Ut5108Actions from './ut-5108.actions';
import { Ut5108Entity } from './ut-5108.models';
import { State, initialState, reducer } from './ut-5108.reducer';

describe('Ut5108 Reducer', () => {
  const createUt5108Entity = (id: string, name = ''): Ut5108Entity => ({
    id,
    name: name || `name-${id}`,
  });

  describe('valid Ut5108 actions', () => {
    it('loadUt5108Success should return the list of known Ut5108', () => {
      const ut5108 = [
        createUt5108Entity('PRODUCT-AAA'),
        createUt5108Entity('PRODUCT-zzz'),
      ];
      const action = Ut5108Actions.loadUt5108Success({ ut5108 });

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
