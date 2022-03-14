import { Action } from '@ngrx/store';

import * as AylikUretimPlaniActions from './aylik-uretim-plani.actions';
import { AylikUretimPlaniEntity } from './aylik-uretim-plani.models';
import { State, initialState, reducer } from './aylik-uretim-plani.reducer';

describe('AylikUretimPlani Reducer', () => {
  const createAylikUretimPlaniEntity = (
    id: string,
    name = ''
  ): AylikUretimPlaniEntity => ({
    id,
    name: name || `name-${id}`,
  });

  describe('valid AylikUretimPlani actions', () => {
    it('loadAylikUretimPlaniSuccess should return the list of known AylikUretimPlani', () => {
      const aylikUretimPlani = [
        createAylikUretimPlaniEntity('PRODUCT-AAA'),
        createAylikUretimPlaniEntity('PRODUCT-zzz'),
      ];
      const action = AylikUretimPlaniActions.loadAylikUretimPlaniSuccess({
        aylikUretimPlani,
      });

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
