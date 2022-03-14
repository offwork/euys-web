import { Action } from '@ngrx/store';

import * as Kt1201Actions from './kt-1201.actions';
import { Kt1201Entity } from './kt-1201.models';
import { State, initialState, reducer } from './kt-1201.reducer';

describe('Kt1201 Reducer', () => {
  const createKt1201Entity = (id: string, name = ''): Kt1201Entity => ({
    id,
    name: name || `name-${id}`,
  });

  describe('valid Kt1201 actions', () => {
    it('loadKt1201Success should return the list of known Kt1201', () => {
      const kt1201 = [createKt1201Entity('PRODUCT-AAA'), createKt1201Entity('PRODUCT-zzz')];
      const action = Kt1201Actions.loadKt1201Success({ kt1201 });

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
