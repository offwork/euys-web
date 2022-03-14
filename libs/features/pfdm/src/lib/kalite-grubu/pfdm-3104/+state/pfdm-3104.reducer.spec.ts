import { Action } from '@ngrx/store';

import * as Pfdm3104Actions from './pfdm-3104.actions';
import { Pfdm3104Entity } from './pfdm-3104.models';
import { State, initialState, reducer } from './pfdm-3104.reducer';

describe('Pfdm3104 Reducer', () => {
  const createPfdm3104Entity = (id: string, name = ''): Pfdm3104Entity => ({
    id,
    name: name || `name-${id}`,
  });

  describe('valid Pfdm3104 actions', () => {
    it('loadPfdm3104Success should return the list of known Pfdm3104', () => {
      const pfdm3104 = [
        createPfdm3104Entity('PRODUCT-AAA'),
        createPfdm3104Entity('PRODUCT-zzz'),
      ];
      const action = Pfdm3104Actions.loadPfdm3104Success({ pfdm3104 });

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
