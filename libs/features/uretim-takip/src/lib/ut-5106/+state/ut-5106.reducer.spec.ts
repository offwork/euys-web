import { Action } from '@ngrx/store';

import * as Ut5106Actions from './ut-5106.actions';
import { Ut5106Entity } from './ut-5106.models';
import { State, initialState, reducer } from './ut-5106.reducer';

describe('Ut5106 Reducer', () => {
  const createUt5106Entity = (id: string, name = ''): Ut5106Entity => ({
    id,
    name: name || `name-${id}`,
  });

  describe('valid Ut5106 actions', () => {
    it('loadUt5106Success should return the list of known Ut5106', () => {
      const ut5106 = [
        createUt5106Entity('PRODUCT-AAA'),
        createUt5106Entity('PRODUCT-zzz'),
      ];
      const action = Ut5106Actions.loadUt5106Success({ ut5106 });

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
