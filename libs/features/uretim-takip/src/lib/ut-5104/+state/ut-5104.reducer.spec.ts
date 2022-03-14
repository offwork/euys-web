import { Action } from '@ngrx/store';

import * as Ut5104Actions from './ut-5104.actions';
import { Ut5104Entity } from './ut-5104.models';
import { State, initialState, reducer } from './ut-5104.reducer';

describe('Ut5104 Reducer', () => {
  const createUt5104Entity = (id: string, name = ''): Ut5104Entity => ({
    id,
    name: name || `name-${id}`,
  });

  describe('valid Ut5104 actions', () => {
    it('loadUt5104Success should return the list of known Ut5104', () => {
      const ut5104 = [
        createUt5104Entity('PRODUCT-AAA'),
        createUt5104Entity('PRODUCT-zzz'),
      ];
      const action = Ut5104Actions.loadUt5104Success({ ut5104 });

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
