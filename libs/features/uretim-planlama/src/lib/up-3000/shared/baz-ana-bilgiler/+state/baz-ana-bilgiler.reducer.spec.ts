import { Action } from '@ngrx/store';

import * as BazAnaBilgilerActions from './baz-ana-bilgiler.actions';
import { BazAnaBilgilerEntity } from './baz-ana-bilgiler.models';
import { State, initialState, reducer } from './baz-ana-bilgiler.reducer';

describe('BazAnaBilgiler Reducer', () => {
  const createBazAnaBilgilerEntity = (id: string, name = ''): BazAnaBilgilerEntity => ({
    id,
    name: name || `name-${id}`,
  });

  describe('valid BazAnaBilgiler actions', () => {
    it('loadBazAnaBilgilerSuccess should return the list of known BazAnaBilgiler', () => {
      const bazAnaBilgiler = [createBazAnaBilgilerEntity('PRODUCT-AAA'), createBazAnaBilgilerEntity('PRODUCT-zzz')];
      const action = BazAnaBilgilerActions.loadBazAnaBilgilerSuccess({ bazAnaBilgiler });

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
