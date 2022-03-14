import { Action } from '@ngrx/store';

import * as Ut6113Actions from './ut-6113.actions';
import { Ut6113Entity } from './ut-6113.models';
import { State, initialState, reducer } from './ut-6113.reducer';

describe('Ut6113 Reducer', () => {
  const createUt6113Entity = (id: string, name = ''): Ut6113Entity => ({
    id,
    name: name || `name-${id}`,
  });

  describe('valid Ut6113 actions', () => {
    it('loadUt6113Success should return the list of known Ut6113', () => {
      const ut6113 = [
        createUt6113Entity('PRODUCT-AAA'),
        createUt6113Entity('PRODUCT-zzz'),
      ];
      const action = Ut6113Actions.loadUt6113Success({ ut6113 });

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
