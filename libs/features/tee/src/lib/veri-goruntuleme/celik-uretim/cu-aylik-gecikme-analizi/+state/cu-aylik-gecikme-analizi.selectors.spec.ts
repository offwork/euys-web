import { CuAylikGecikmeAnaliziEntity } from './cu-aylik-gecikme-analizi.models';
import { State, cuAylikGecikmeAnaliziAdapter, initialState } from './cu-aylik-gecikme-analizi.reducer';
import * as CuAylikGecikmeAnaliziSelectors from './cu-aylik-gecikme-analizi.selectors';

describe('CuAylikGecikmeAnalizi Selectors', () => {
  const ERROR_MSG = 'No Error Available';
  const getCuAylikGecikmeAnaliziId = (it) => it['id'];
  const createCuAylikGecikmeAnaliziEntity = (id: string, name = '') =>
    ({
      id,
      name: name || `name-${id}`,
    } as CuAylikGecikmeAnaliziEntity);

  let state;

  beforeEach(() => {
    state = {
      cuAylikGecikmeAnalizi: cuAylikGecikmeAnaliziAdapter.setAll(
        [
          createCuAylikGecikmeAnaliziEntity('PRODUCT-AAA'),
          createCuAylikGecikmeAnaliziEntity('PRODUCT-BBB'),
          createCuAylikGecikmeAnaliziEntity('PRODUCT-CCC'),
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

  describe('CuAylikGecikmeAnalizi Selectors', () => {
    it('getAllCuAylikGecikmeAnalizi() should return the list of CuAylikGecikmeAnalizi', () => {
      const results = CuAylikGecikmeAnaliziSelectors.getAllCuAylikGecikmeAnalizi(state);
      const selId = getCuAylikGecikmeAnaliziId(results[1]);

      expect(results.length).toBe(3);
      expect(selId).toBe('PRODUCT-BBB');
    });

    it('getSelected() should return the selected Entity', () => {
      const result = CuAylikGecikmeAnaliziSelectors.getSelected(state);
      const selId = getCuAylikGecikmeAnaliziId(result);

      expect(selId).toBe('PRODUCT-BBB');
    });

    it("getCuAylikGecikmeAnaliziLoaded() should return the current 'loaded' status", () => {
      const result = CuAylikGecikmeAnaliziSelectors.getCuAylikGecikmeAnaliziLoaded(state);

      expect(result).toBe(true);
    });

    it("getCuAylikGecikmeAnaliziError() should return the current 'error' state", () => {
      const result = CuAylikGecikmeAnaliziSelectors.getCuAylikGecikmeAnaliziError(state);

      expect(result).toBe(ERROR_MSG);
    });
  });
});
