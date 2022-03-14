import { Action } from '@ngrx/store';

import * as Up3016Actions from './up-3016.actions';
import { Up3016Entity } from './up-3016.models';
import { State, initialState, reducer } from './up-3016.reducer';

describe('Up3016 Reducer', () => {
  const createUp3016Entity = (id: string, name = ''): Up3016Entity => ({
    id,
    name: name || `name-${id}`,
  });

  describe('valid Up3016 actions', () => {
    it('loadUp3016Success should return the list of known Up3016', () => {
      const up3016 = [
        createUp3016Entity('PRODUCT-AAA'),
        createUp3016Entity('PRODUCT-zzz'),
      ];
      const action = Up3016Actions.loadUp3016Success({ up3016 });

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
