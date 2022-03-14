import { Action } from '@ngrx/store';

import * as Kt1215Actions from './kt-1215.actions';
import { Kt1215Entity } from './kt-1215.models';
import { State, initialState, reducer } from './kt-1215.reducer';

describe('Kt1215 Reducer', () => {
  const createKt1215Entity = (id: string, name = ''): Kt1215Entity => ({
    id,
    name: name || `name-${id}`,
  });

  describe('valid Kt1215 actions', () => {
    it('loadKt1215Success should return the list of known Kt1215', () => {
      const kt1215 = [createKt1215Entity('PRODUCT-AAA'), createKt1215Entity('PRODUCT-zzz')];
      const action = Kt1215Actions.loadKt1215Success({ kt1215 });

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
