import { Action } from '@ngrx/store';

import * as Kt1312Actions from './kt-1312.actions';
import { Kt1312Entity } from './kt-1312.models';
import { State, initialState, reducer } from './kt-1312.reducer';

describe('Kt1312 Reducer', () => {
  const createKt1312Entity = (id: string, name = ''): Kt1312Entity => ({
    id,
    name: name || `name-${id}`,
  });

  describe('valid Kt1312 actions', () => {
    it('loadKt1312Success should return the list of known Kt1312', () => {
      const kt1312 = [
        createKt1312Entity('PRODUCT-AAA'),
        createKt1312Entity('PRODUCT-zzz'),
      ];
      const action = Kt1312Actions.loadKt1312Success({ kt1312 });

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
