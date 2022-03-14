import { Action } from '@ngrx/store';

import * as Ut5105Actions from './ut-5105.actions';
import { Ut5105Entity } from './ut-5105.models';
import { State, initialState, reducer } from './ut-5105.reducer';

describe('Ut5105 Reducer', () => {
  const createUt5105Entity = (id: string, name = ''): Ut5105Entity => ({
    id,
    name: name || `name-${id}`,
  });

  describe('valid Ut5105 actions', () => {
    it('loadUt5105Success should return the list of known Ut5105', () => {
      const ut5105 = [
        createUt5105Entity('PRODUCT-AAA'),
        createUt5105Entity('PRODUCT-zzz'),
      ];
      const action = Ut5105Actions.loadUt5105Success({ ut5105 });

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
