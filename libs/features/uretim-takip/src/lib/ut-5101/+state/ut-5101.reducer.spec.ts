import { Action } from '@ngrx/store';

import * as Ut5101Actions from './ut-5101.actions';
import { Ut5101Entity } from './ut-5101.models';
import { State, initialState, reducer } from './ut-5101.reducer';

describe('Ut5101 Reducer', () => {
  const createUt5101Entity = (
    id: string,
    name = ''
  ): Ut5101Entity => ({
    id,
    name: name || `name-${id}`,
  });

  describe('valid Ut5101 actions', () => {
    it('loadUt5101Success should return the list of known Ut5101', () => {
      const Ut5101 = [
        createUt5101Entity('PRODUCT-AAA'),
        createUt5101Entity('PRODUCT-zzz'),
      ];
      const action = Ut5101Actions.loadUt5101Success({
        Ut5101,
      });

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
