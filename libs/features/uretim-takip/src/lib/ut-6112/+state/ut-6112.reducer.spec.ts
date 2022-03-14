import { Action } from '@ngrx/store';

import * as Ut6112Actions from './ut-6112.actions';
import { Ut6112Entity } from './ut-6112.models';
import { State, initialState, reducer } from './ut-6112.reducer';

describe('Ut6112 Reducer', () => {
  const createUt6112Entity = (id: string, name = ''): Ut6112Entity => ({
    id,
    name: name || `name-${id}`,
  });

  describe('valid Ut6112 actions', () => {
    it('loadUt6112Success should return the list of known Ut6112', () => {
      const ut6112 = [
        createUt6112Entity('PRODUCT-AAA'),
        createUt6112Entity('PRODUCT-zzz'),
      ];
      const action = Ut6112Actions.loadUt6112Success({ ut6112 });

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
