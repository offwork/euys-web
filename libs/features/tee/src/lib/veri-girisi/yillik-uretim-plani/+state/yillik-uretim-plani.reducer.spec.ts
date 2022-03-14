import * as YillikUretimPlaniActions from './yillik-uretim-plani.actions';
import {State, initialState, reducer} from './yillik-uretim-plani.reducer';
import {YillikUretimPlaniItem} from "./yillik-uretim-plani.models";

describe('YillikUretimPlani Reducer', () => {
  const createYillikUretimPlaniEntity = (id: string, name = '') =>
    ({
      id,
      unite: name || `name-${id}`,
    } as YillikUretimPlaniItem);

  beforeEach(() => { /* Do nothing */
  });

  describe('valid YillikUretimPlani actions', () => {
    it('loadYillikUretimPlaniSuccess should return set the list of known YillikUretimPlani', () => {
      const yillikUretimPlani = {
        data: [
          createYillikUretimPlaniEntity('PRODUCT-AAA'),
          createYillikUretimPlaniEntity('PRODUCT-zzz'),
        ]
      };
      const action = YillikUretimPlaniActions.loadYillikUretimPlaniSuccess({yillikUretimPlani});

      const result: State = reducer(initialState, action);

      expect(result.loaded).toBe(true);
    });
  });

  describe('unknown action', () => {
    it('should return the previous state', () => {
      const action = {} as any;

      const result = reducer(initialState, action);

      expect(result).toBe(initialState);
    });
  });
});
