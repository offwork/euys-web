import { Action } from '@ngrx/store';

import * as Up3020Actions from './up-3020.actions';
import { Up3020Entity } from './up-3020.models';
import {
  State,
  initialState,
  reducer,
} from './up-3020.reducer';

describe('Up3020 Reducer', () => {
  const createUp3020Entity = (
    id: string,
    name = ''
  ): Up3020Entity => ({
    id,
    name: name || `name-${id}`,
  });

  describe('valid Up3020 actions', () => {
    it('loadUp3020Success should return the list of known Up3020', () => {
      const Up3020 = [
        createUp3020Entity('PRODUCT-AAA'),
        createUp3020Entity('PRODUCT-zzz'),
      ];
      const action =
        Up3020Actions.loadUp3020Success({
          Up3020,
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
