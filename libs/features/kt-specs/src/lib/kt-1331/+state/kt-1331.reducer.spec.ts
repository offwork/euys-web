import { Action } from '@ngrx/store';

import * as Kt1331Actions from './kt-1331.actions';
import { Kt1331Entity } from './kt-1331.models';
import { State, initialState, reducer } from './kt-1331.reducer';

describe('Kt1331 Reducer', () => {
  const createKt1331Entity = (id: string, name = ''): Kt1331Entity => ({
    id,
    name: name || `name-${id}`,
  });

  describe('valid Kt1331 actions', () => {
    it('loadKt1331Success should return the list of known Kt1331', () => {
      const kt1331 = [
        createKt1331Entity('PRODUCT-AAA'),
        createKt1331Entity('PRODUCT-zzz'),
      ];
      const action = Kt1331Actions.loadKt1331Success({ kt1331 });

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
