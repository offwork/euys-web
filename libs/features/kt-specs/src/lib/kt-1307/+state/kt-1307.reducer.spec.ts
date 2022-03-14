import { Action } from '@ngrx/store';

import * as Kt1307Actions from './kt-1307.actions';
import { Kt1307Entity } from './kt-1307.models';
import { State, initialState, reducer } from './kt-1307.reducer';

describe('Kt1307 Reducer', () => {
  const createKt1307Entity = (id: string, name = ''): Kt1307Entity => ({
    id,
    name: name || `name-${id}`,
  });

  describe('valid Kt1307 actions', () => {
    it('loadKt1307Success should return the list of known Kt1307', () => {
      const kt1307 = [
        createKt1307Entity('PRODUCT-AAA'),
        createKt1307Entity('PRODUCT-zzz'),
      ];
      const action = Kt1307Actions.loadKt1307Success({ kt1307 });

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
