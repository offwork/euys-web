import { Action } from '@ngrx/store';

import * as Kk8104Actions from './kk-8104.actions';
import { Kk8104Entity } from './kk-8104.models';
import { State, initialState, reducer } from './kk-8104.reducer';

describe('Kk8104 Reducer', () => {
  const createKk8104Entity = (id: string, name = ''): Kk8104Entity => ({
    id,
    name: name || `name-${id}`,
  });

  describe('valid Kk8104 actions', () => {
    it('loadKk8104Success should return the list of known Kk8104', () => {
      const kk8104 = [
        createKk8104Entity('PRODUCT-AAA'),
        createKk8104Entity('PRODUCT-zzz'),
      ];
      const action = Kk8104Actions.loadKk8104Success({ kk8104 });

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
