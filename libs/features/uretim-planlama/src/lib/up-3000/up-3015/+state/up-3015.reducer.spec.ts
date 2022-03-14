import { Action } from '@ngrx/store';

import * as Up3015Actions from './up-3015.actions';
import { Up3015Entity } from './up-3015.models';
import { State, initialState, reducer } from './up-3015.reducer';

describe('Up3015 Reducer', () => {
  const createUp3015Entity = (id: string, name = ''): Up3015Entity => ({
    id,
    name: name || `name-${id}`,
  });

  describe('valid Up3015 actions', () => {
    it('loadUp3015Success should return the list of known Up3015', () => {
      const up3015 = [
        createUp3015Entity('PRODUCT-AAA'),
        createUp3015Entity('PRODUCT-zzz'),
      ];
      const action = Up3015Actions.loadUp3015Success({ up3015 });

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
