import { Action } from '@ngrx/store';

import * as Ut6114Actions from './ut-6114.actions';
import { Ut6114Entity } from './ut-6114.models';
import { State, initialState, reducer } from './ut-6114.reducer';

describe('Ut6114 Reducer', () => {
  const createUt6114Entity = (id: string, name = ''): Ut6114Entity => ({
    id,
    name: name || `name-${id}`,
  });

  describe('valid Ut6114 actions', () => {
    it('loadUt6114Success should return the list of known Ut6114', () => {
      const ut6114 = [
        createUt6114Entity('PRODUCT-AAA'),
        createUt6114Entity('PRODUCT-zzz'),
      ];
      const action = Ut6114Actions.loadUt6114Success({ ut6114 });

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
