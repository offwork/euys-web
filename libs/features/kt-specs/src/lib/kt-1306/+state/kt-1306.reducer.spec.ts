import { Action } from '@ngrx/store';

import * as Kt1306Actions from './kt-1306.actions';
import { Kt1306Entity } from './kt-1306.models';
import { State, initialState, reducer } from './kt-1306.reducer';

describe('Kt1306 Reducer', () => {
  const createKt1306Entity = (id: string, name = ''): Kt1306Entity => ({
    id,
    name: name || `name-${id}`,
  });

  describe('valid Kt1306 actions', () => {
    it('loadKt1306Success should return the list of known Kt1306', () => {
      const kt1306 = [
        createKt1306Entity('PRODUCT-AAA'),
        createKt1306Entity('PRODUCT-zzz'),
      ];
      const action = Kt1306Actions.loadKt1306Success({ kt1306 });

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
