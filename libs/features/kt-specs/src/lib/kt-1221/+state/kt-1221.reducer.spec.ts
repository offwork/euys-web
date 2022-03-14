import { Action } from '@ngrx/store';

import * as Kt1221Actions from './kt-1221.actions';
import { Kt1221Entity } from './kt-1221.models';
import { State, initialState, reducer } from './kt-1221.reducer';

describe('Kt1221 Reducer', () => {
  const createKt1221Entity = (id: string, name = ''): Kt1221Entity => ({
    id,
    name: name || `name-${id}`,
  });

  describe('valid Kt1221 actions', () => {
    it('loadKt1221Success should return the list of known Kt1221', () => {
      const kt1221 = [createKt1221Entity('PRODUCT-AAA'), createKt1221Entity('PRODUCT-zzz')];
      const action = Kt1221Actions.loadKt1221Success({ kt1221 });

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
