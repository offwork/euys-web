import { Action } from '@ngrx/store';

import * as Up3021Actions from './up-3021.actions';
import { Up3021Entity } from './up-3021.models';
import {
  State,
  initialState,
  reducer,
} from './up-3021.reducer';

describe('Up3021 Reducer', () => {
  const createUp3021Entity = (
    id: string,
    name = ''
  ): Up3021Entity => ({
    id,
    name: name || `name-${id}`,
  });

  describe('valid Up3021 actions', () => {
    it('loadUp3021Success should return the list of known Up3021', () => {
      const Up3021 = [
        createUp3021Entity('PRODUCT-AAA'),
        createUp3021Entity('PRODUCT-zzz'),
      ];
      const action =
        Up3021Actions.loadUp3021Success(
          { Up3021 }
        );

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
