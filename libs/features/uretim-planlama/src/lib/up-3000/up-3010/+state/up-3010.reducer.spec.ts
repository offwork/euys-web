import { Action } from '@ngrx/store';

import * as Up3010Actions from './up-3010.actions';
import { Up3010Entity } from './up-3010.models';
import { State, initialState, reducer } from './up-3010.reducer';

describe('Up3010 Reducer', () => {
  const createUp3010Entity = (id: string, name = ''): Up3010Entity => ({
    id,
    name: name || `name-${id}`,
  });

  describe('valid Up3010 actions', () => {
    it('loadUp3010Success should return the list of known Up3010', () => {
      const up3010 = [
        createUp3010Entity('PRODUCT-AAA'),
        createUp3010Entity('PRODUCT-zzz'),
      ];
      const action = Up3010Actions.loadUp3010Success({ up3010 });

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
