import { Action } from '@ngrx/store';

import * as Up3017Actions from './up-3017.actions';
import { Up3017Entity } from './up-3017.models';
import { State, initialState, reducer } from './up-3017.reducer';

describe('Up3017 Reducer', () => {
  const createUp3017Entity = (id: string, name = ''): Up3017Entity => ({
    id,
    name: name || `name-${id}`,
  });

  describe('valid Up3017 actions', () => {
    it('loadUp3017Success should return the list of known Up3017', () => {
      const up3017 = [
        createUp3017Entity('PRODUCT-AAA'),
        createUp3017Entity('PRODUCT-zzz'),
      ];
      const action = Up3017Actions.loadUp3017Success({ up3017 });

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
