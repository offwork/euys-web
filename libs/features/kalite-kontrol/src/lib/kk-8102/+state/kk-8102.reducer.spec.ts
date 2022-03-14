import { Action } from '@ngrx/store';

import * as Kk8102Actions from './kk-8102.actions';
import { Kk8102Entity } from './kk-8102.models';
import { State, initialState, reducer } from './kk-8102.reducer';

describe('Kk8102 Reducer', () => {
  const createKk8102Entity = (id: string, name = ''): Kk8102Entity => ({
    id,
    name: name || `name-${id}`,
  });

  describe('valid Kk8102 actions', () => {
    it('loadKk8102Success should return the list of known Kk8102', () => {
      const kk8102 = [
        createKk8102Entity('PRODUCT-AAA'),
        createKk8102Entity('PRODUCT-zzz'),
      ];
      const action = Kk8102Actions.loadKk8102Success({ kk8102 });

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
