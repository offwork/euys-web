import { AylikUretimPlaniEntity } from './aylik-uretim-plani.models';
import {
  aylikUretimPlaniAdapter,
  AylikUretimPlaniPartialState,
  initialState,
} from './aylik-uretim-plani.reducer';
import * as AylikUretimPlaniSelectors from './aylik-uretim-plani.selectors';

describe('AylikUretimPlani Selectors', () => {
  const ERROR_MSG = 'No Error Available';
  const getAylikUretimPlaniId = (it: AylikUretimPlaniEntity) => it.id;
  const createAylikUretimPlaniEntity = (id: string, name = '') =>
    ({
      id,
      name: name || `name-${id}`,
    } as AylikUretimPlaniEntity);

  let state: AylikUretimPlaniPartialState;

  beforeEach(() => {
    state = {
      aylikUretimPlani: aylikUretimPlaniAdapter.setAll(
        [
          createAylikUretimPlaniEntity('PRODUCT-AAA'),
          createAylikUretimPlaniEntity('PRODUCT-BBB'),
          createAylikUretimPlaniEntity('PRODUCT-CCC'),
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

  describe('AylikUretimPlani Selectors', () => {
    it('getAllAylikUretimPlani() should return the list of AylikUretimPlani', () => {
      const results = AylikUretimPlaniSelectors.getAllAylikUretimPlani(state);
      const selId = getAylikUretimPlaniId(results[1]);

      expect(results.length).toBe(3);
      expect(selId).toBe('PRODUCT-BBB');
    });

    it('getSelected() should return the selected Entity', () => {
      const result = AylikUretimPlaniSelectors.getSelected(
        state
      ) as AylikUretimPlaniEntity;
      const selId = getAylikUretimPlaniId(result);

      expect(selId).toBe('PRODUCT-BBB');
    });

    it('getAylikUretimPlaniLoaded() should return the current "loaded" status', () => {
      const result = AylikUretimPlaniSelectors.getAylikUretimPlaniLoaded(state);

      expect(result).toBe(true);
    });

    it('getAylikUretimPlaniError() should return the current "error" state', () => {
      const result = AylikUretimPlaniSelectors.getAylikUretimPlaniError(state);

      expect(result).toBe(ERROR_MSG);
    });
  });
});
