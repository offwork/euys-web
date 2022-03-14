import { Action } from '@ngrx/store';

import * as Up3004Actions from './up-3004.actions';
import { Up3004Entity } from './up-3004.models';
import { State, initialState, reducer } from './up-3004.reducer';

describe('Up3004 Reducer', () => {
  const createUp3004Entity = (id: string, name = ''): Up3004Entity => ({
    id,
    name: name || `name-${id}`,
  });

  describe('valid Up3004 actions', () => {
    it('loadUp3004Success should return the list of known Up3004', () => {
      const up3004 = [
        createUp3004Entity('PRODUCT-AAA'),
        createUp3004Entity('PRODUCT-zzz'),
      ];
      const action = Up3004Actions.loadUp3004Success({ up3004 });

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
