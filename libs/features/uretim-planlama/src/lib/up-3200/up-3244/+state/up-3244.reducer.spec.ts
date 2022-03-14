import { Action } from '@ngrx/store';

import * as Up3244Actions from './up-3244.actions';
import { Up3244Entity } from './up-3244.models';
import { State, initialState, reducer } from './up-3244.reducer';

describe('Up3244 Reducer', () => {
  const createUp3244Entity = (id: string, name = ''): Up3244Entity => ({
    id,
    name: name || `name-${id}`,
  });

  describe('valid Up3244 actions', () => {
    it('loadUp3244Success should return the list of known Up3244', () => {
      const up3244 = [
        createUp3244Entity('PRODUCT-AAA'),
        createUp3244Entity('PRODUCT-zzz'),
      ];
      const action = Up3244Actions.loadUp3244Success({ up3244 });

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
