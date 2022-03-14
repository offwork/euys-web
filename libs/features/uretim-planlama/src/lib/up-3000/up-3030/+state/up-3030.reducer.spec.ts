import { Action } from '@ngrx/store';

import * as Up3030Actions from './up-3030.actions';
import { Up3030Entity } from './up-3030.models';
import { State, initialState, reducer } from './up-3030.reducer';

describe('Up3030 Reducer', () => {
  const createUp3030Entity = (id: string, name = ''): Up3030Entity => ({
    id,
    name: name || `name-${id}`,
  });

  describe('valid Up3030 actions', () => {
    it('loadUp3030Success should return the list of known Up3030', () => {
      const up3030 = [
        createUp3030Entity('PRODUCT-AAA'),
        createUp3030Entity('PRODUCT-zzz'),
      ];
      const action = Up3030Actions.loadUp3030Success({ up3030 });

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
