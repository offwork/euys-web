import { Action } from '@ngrx/store';

import * as Kt1303Actions from './kt-1303.actions';
import { Kt1303Entity } from './kt-1303.models';
import { State, initialState, reducer } from './kt-1303.reducer';

describe('Kt1303 Reducer', () => {
  const createKt1303Entity = (id: string, name = ''): Kt1303Entity => ({
    id,
    name: name || `name-${id}`,
  });

  describe('valid Kt1303 actions', () => {
    it('loadKt1303Success should return the list of known Kt1303', () => {
      const kt1303 = [
        createKt1303Entity('PRODUCT-AAA'),
        createKt1303Entity('PRODUCT-zzz'),
      ];
      const action = Kt1303Actions.loadKt1303Success({ kt1303 });

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
