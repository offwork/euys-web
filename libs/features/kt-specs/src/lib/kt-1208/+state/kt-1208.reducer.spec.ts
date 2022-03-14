import { Action } from '@ngrx/store';

import * as Kt1208Actions from './kt-1208.actions';
import { Kt1208Entity } from './kt-1208.models';
import { State, initialState, reducer } from './kt-1208.reducer';

describe('Kt1208 Reducer', () => {
  const createKt1208Entity = (id: string, name = ''): Kt1208Entity => ({
    id,
    name: name || `name-${id}`,
  });

  describe('valid Kt1208 actions', () => {
    it('loadKt1208Success should return the list of known Kt1208', () => {
      const kt1208 = [createKt1208Entity('PRODUCT-AAA'), createKt1208Entity('PRODUCT-zzz')];
      const action = Kt1208Actions.loadKt1208Success({ kt1208 });

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
