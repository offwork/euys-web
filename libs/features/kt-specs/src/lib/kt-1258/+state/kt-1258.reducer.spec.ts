import { Action } from '@ngrx/store';

import * as Kt1258Actions from './kt-1258.actions';
import { Kt1258Entity } from './kt-1258.models';
import { State, initialState, reducer } from './kt-1258.reducer';

describe('Kt1258 Reducer', () => {
  const createKt1258Entity = (id: string, name = ''): Kt1258Entity => ({
    id,
    name: name || `name-${id}`,
  });

  describe('valid Kt1258 actions', () => {
    it('loadKt1258Success should return the list of known Kt1258', () => {
      const kt1258 = [createKt1258Entity('PRODUCT-AAA'), createKt1258Entity('PRODUCT-zzz')];
      const action = Kt1258Actions.loadKt1258Success({ kt1258 });

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
