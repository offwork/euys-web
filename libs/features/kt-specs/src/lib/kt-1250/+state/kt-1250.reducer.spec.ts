import { Action } from '@ngrx/store';

import * as Kt1250Actions from './kt-1250.actions';
import { Kt1250Entity } from './kt-1250.models';
import { State, initialState, reducer } from './kt-1250.reducer';

describe('Kt1250 Reducer', () => {
  const createKt1250Entity = (id: string, name = ''): Kt1250Entity => ({
    id,
    name: name || `name-${id}`,
  });

  describe('valid Kt1250 actions', () => {
    it('loadKt1250Success should return the list of known Kt1250', () => {
      const kt1250 = [createKt1250Entity('PRODUCT-AAA'), createKt1250Entity('PRODUCT-zzz')];
      const action = Kt1250Actions.loadKt1250Success({ kt1250 });

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
