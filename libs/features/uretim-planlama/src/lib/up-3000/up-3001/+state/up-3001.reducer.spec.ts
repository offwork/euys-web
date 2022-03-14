import { Action } from '@ngrx/store';

import * as Up3001Actions from './up-3001.actions';
import { Up3001Entity } from './up-3001.models';
import { State, initialState, reducer } from './up-3001.reducer';

describe('Up3001 Reducer', () => {
  const createUp3001Entity = (id: string, name = ''): Up3001Entity => ({
    id,
    name: name || `name-${id}`,
  });

  describe('valid Up3001 actions', () => {
    it('loadUp3001Success should return the list of known Up3001', () => {
      const Up3001 = [
        createUp3001Entity('PRODUCT-AAA'),
        createUp3001Entity('PRODUCT-zzz'),
      ];
      const action = Up3001Actions.loadUp3001Success({ Up3001 });

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
