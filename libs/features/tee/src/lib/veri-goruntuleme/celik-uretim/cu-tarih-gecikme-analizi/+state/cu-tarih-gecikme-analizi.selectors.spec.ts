import { CuTarihGecikmeAnaliziEntity } from './cu-tarih-gecikme-analizi.models';
import { State, cuTarihGecikmeAnaliziAdapter, initialState } from './cu-tarih-gecikme-analizi.reducer';
import * as CuTarihGecikmeAnaliziSelectors from './cu-tarih-gecikme-analizi.selectors';

describe('CuTarihGecikmeAnalizi Selectors', () => {
  const ERROR_MSG = 'No Error Available';
  const getCuTarihGecikmeAnaliziId = (it) => it['id'];
  const createCuTarihGecikmeAnaliziEntity = (id: string, name = '') =>
    ({
      id,
      name: name || `name-${id}`,
    } as CuTarihGecikmeAnaliziEntity);

  let state;

  beforeEach(() => {
    state = {
      cuTarihGecikmeAnalizi: cuTarihGecikmeAnaliziAdapter.setAll(
        [
          createCuTarihGecikmeAnaliziEntity('PRODUCT-AAA'),
          createCuTarihGecikmeAnaliziEntity('PRODUCT-BBB'),
          createCuTarihGecikmeAnaliziEntity('PRODUCT-CCC'),
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

  describe('CuTarihGecikmeAnalizi Selectors', () => {
    it('getAllCuTarihGecikmeAnalizi() should return the list of CuTarihGecikmeAnalizi', () => {
      const results = CuTarihGecikmeAnaliziSelectors.getAllCuTarihGecikmeAnalizi(state);
      const selId = getCuTarihGecikmeAnaliziId(results[1]);

      expect(results.length).toBe(3);
      expect(selId).toBe('PRODUCT-BBB');
    });

    it('getSelected() should return the selected Entity', () => {
      const result = CuTarihGecikmeAnaliziSelectors.getSelected(state);
      const selId = getCuTarihGecikmeAnaliziId(result);

      expect(selId).toBe('PRODUCT-BBB');
    });

    it("getCuTarihGecikmeAnaliziLoaded() should return the current 'loaded' status", () => {
      const result = CuTarihGecikmeAnaliziSelectors.getCuTarihGecikmeAnaliziLoaded(state);

      expect(result).toBe(true);
    });

    it("getCuTarihGecikmeAnaliziError() should return the current 'error' state", () => {
      const result = CuTarihGecikmeAnaliziSelectors.getCuTarihGecikmeAnaliziError(state);

      expect(result).toBe(ERROR_MSG);
    });
  });
});
