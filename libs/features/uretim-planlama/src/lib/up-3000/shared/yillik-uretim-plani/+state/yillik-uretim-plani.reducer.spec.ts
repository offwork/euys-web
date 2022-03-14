import { Action } from '@ngrx/store';

import * as YillikUretimPlaniActions from './yillik-uretim-plani.actions';
import { YillikUretimPlaniEntity } from './yillik-uretim-plani.models';
import { State, initialState, reducer } from './yillik-uretim-plani.reducer';

describe('YillikUretimPlani Reducer', () => {
  const createYillikUretimPlaniEntity = (
    id: string,
    name = ''
  ): YillikUretimPlaniEntity => ({
    id,
    name: name || `name-${id}`,
  });

  describe('valid YillikUretimPlani actions', () => {
    it('loadYillikUretimPlaniSuccess should return the list of known YillikUretimPlani', () => {
      const yillikUretimPlani = [
        createYillikUretimPlaniEntity('PRODUCT-AAA'),
        createYillikUretimPlaniEntity('PRODUCT-zzz'),
      ];
      const action = YillikUretimPlaniActions.loadYillikUretimPlaniSuccess({
        yillikUretimPlani,
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
