import { Action } from '@ngrx/store';

import * as Up3002Actions from './up-3002.actions';
import { Up3002Entity } from './up-3002.models';
import {
  State,
  initialState,
  reducer,
} from './up-3002.reducer';

describe('Up3002 Reducer', () => {
  const createUp3002Entity = (
    id: string,
    name = ''
  ): Up3002Entity => ({
    id,
    name: name || `name-${id}`,
  });

  describe('valid Up3002 actions', () => {
    it('loadUp3002Success should return the list of known Up3002', () => {
      const Up3002 = [
        createUp3002Entity('PRODUCT-AAA'),
        createUp3002Entity('PRODUCT-zzz'),
      ];
      const action =
        Up3002Actions.loadUp3002Success({
          Up3002,
        });

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
