import { Action } from '@ngrx/store';

import * as Up3003Actions from './up-3003.actions';
import { Up3003Entity } from './up-3003.models';
import { State, initialState, reducer } from './up-3003.reducer';

describe('Up3003 Reducer', () => {
  const createUp3003Entity = (id: string, name = ''): Up3003Entity => ({
    id,
    name: name || `name-${id}`,
  });

  describe('valid Up3003 actions', () => {
    it('loadUp3003Success should return the list of known Up3003', () => {
      const up3003 = [
        createUp3003Entity('PRODUCT-AAA'),
        createUp3003Entity('PRODUCT-zzz'),
      ];
      const action = Up3003Actions.loadUp3003Success({ up3003 });

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
