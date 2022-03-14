import { YillikUretimPlaniEntity } from './yillik-uretim-plani.models';
import {
  yillikUretimPlaniAdapter,
  YillikUretimPlaniPartialState,
  initialState,
} from './yillik-uretim-plani.reducer';
import * as YillikUretimPlaniSelectors from './yillik-uretim-plani.selectors';

describe('YillikUretimPlani Selectors', () => {
  const ERROR_MSG = 'No Error Available';
  const getYillikUretimPlaniId = (it: YillikUretimPlaniEntity) => it.id;
  const createYillikUretimPlaniEntity = (id: string, name = '') =>
    ({
      id,
      name: name || `name-${id}`,
    } as YillikUretimPlaniEntity);

  let state: YillikUretimPlaniPartialState;

  beforeEach(() => {
    state = {
      yillikUretimPlani: yillikUretimPlaniAdapter.setAll(
        [
          createYillikUretimPlaniEntity('PRODUCT-AAA'),
          createYillikUretimPlaniEntity('PRODUCT-BBB'),
          createYillikUretimPlaniEntity('PRODUCT-CCC'),
        ],
        {
          ...initialState,
          selectedId: 'PRODUCT-BBB',
          error: ERROR_MSG,
          loaded: true,
        }
      ),
    };
  });

  describe('YillikUretimPlani Selectors', () => {
    it('getAllYillikUretimPlani() should return the list of YillikUretimPlani', () => {
      const results = YillikUretimPlaniSelectors.getAllYillikUretimPlani(state);
      const selId = getYillikUretimPlaniId(results[1]);

      expect(results.length).toBe(3);
      expect(selId).toBe('PRODUCT-BBB');
    });

    it('getSelected() should return the selected Entity', () => {
      const result = YillikUretimPlaniSelectors.getSelected(
        state
      ) as YillikUretimPlaniEntity;
      const selId = getYillikUretimPlaniId(result);

      expect(selId).toBe('PRODUCT-BBB');
    });

    it('getYillikUretimPlaniLoaded() should return the current "loaded" status', () => {
      const result =
        YillikUretimPlaniSelectors.getYillikUretimPlaniLoaded(state);

      expect(result).toBe(true);
    });

    it('getYillikUretimPlaniError() should return the current "error" state', () => {
      const result =
        YillikUretimPlaniSelectors.getYillikUretimPlaniError(state);

      expect(result).toBe(ERROR_MSG);
    });
  });
});
