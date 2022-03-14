import { Action } from '@ngrx/store';

import * as Up3231Actions from './up-3231.actions';
import { Up3231Entity } from './up-3231.models';
import { State, initialState, reducer } from './up-3231.reducer';

describe('Up3231 Reducer', () => {
  const createUp3231Entity = (id: string, name = ''): Up3231Entity => ({
    id,
    name: name || `name-${id}`,
  });

  describe('valid Up3231 actions', () => {
    it('loadUp3231Success should return the list of known Up3231', () => {
      const up3231 = [
        createUp3231Entity('PRODUCT-AAA'),
        createUp3231Entity('PRODUCT-zzz'),
      ];
      const action = Up3231Actions.loadUp3231Success({ up3231 });

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
