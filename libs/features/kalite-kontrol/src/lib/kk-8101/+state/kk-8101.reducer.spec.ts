import { Action } from '@ngrx/store';

import * as Kk8101Actions from './kk-8101.actions';
import { State, initialState, reducer } from './kk-8101.reducer';

describe('Kk8101 Reducer', () => {
  const createKk8101Entity = (id: string, name = ''): Kk8101Entity => ({
    id,
    name: name || `name-${id}`,
  });

  describe('valid Kk8101 actions', () => {
    it('loadKk8101Success should return the list of known Kk8101', () => {
      const kk8101 = [
        createKk8101Entity('PRODUCT-AAA'),
        createKk8101Entity('PRODUCT-zzz'),
      ];
      const action = Kk8101Actions.loadKk8101Success({ kk8101 });

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
