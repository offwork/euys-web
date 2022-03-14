import { Action } from '@ngrx/store';

import * as Up3005Actions from './up-3005.actions';
import { Up3005Entity } from './up-3005.models';
import { State, initialState, reducer } from './up-3005.reducer';

describe('Up3005 Reducer', () => {
  const createUp3005Entity = (id: string, name = ''): Up3005Entity => ({
    id,
    name: name || `name-${id}`,
  });

  describe('valid Up3005 actions', () => {
    it('loadUp3005Success should return the list of known Up3005', () => {
      const up3005 = [
        createUp3005Entity('PRODUCT-AAA'),
        createUp3005Entity('PRODUCT-zzz'),
      ];
      const action = Up3005Actions.loadUp3005Success({ up3005 });

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
