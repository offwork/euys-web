import { Action } from '@ngrx/store';

import * as Kt1230Actions from './kt-1230.actions';
import { Kt1230Entity } from './kt-1230.models';
import { State, initialState, reducer } from './kt-1230.reducer';

describe('Kt1230 Reducer', () => {
  const createKt1230Entity = (id: string, name = ''): Kt1230Entity => ({
    id,
    name: name || `name-${id}`,
  });

  describe('valid Kt1230 actions', () => {
    it('loadKt1230Success should return the list of known Kt1230', () => {
      const kt1230 = [createKt1230Entity('PRODUCT-AAA'), createKt1230Entity('PRODUCT-zzz')];
      const action = Kt1230Actions.loadKt1230Success({ kt1230 });

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
