import { Action } from '@ngrx/store';

import * as Up3230Actions from './up-3230.actions';
import { Up3230Entity } from './up-3230.models';
import { State, initialState, reducer } from './up-3230.reducer';

describe('Up3230 Reducer', () => {
  const createUp3230Entity = (id: string, name = ''): Up3230Entity => ({
    id,
    name: name || `name-${id}`,
  });

  describe('valid Up3230 actions', () => {
    it('loadUp3230Success should return the list of known Up3230', () => {
      const up3230 = [
        createUp3230Entity('PRODUCT-AAA'),
        createUp3230Entity('PRODUCT-zzz'),
      ];
      const action = Up3230Actions.loadUp3230Success({ up3230 });

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
