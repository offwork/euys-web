import { SicakTarihGecikmeAnaliziEntity } from './sicak-tarih-gecikme-analizi.models';
import { State, sicakTarihGecikmeAnaliziAdapter, initialState } from './sicak-tarih-gecikme-analizi.reducer';
import * as SicakTarihGecikmeAnaliziSelectors from './sicak-tarih-gecikme-analizi.selectors';

describe('SicakTarihGecikmeAnalizi Selectors', () => {
  const ERROR_MSG = 'No Error Available';
  const getSicakTarihGecikmeAnaliziId = (it) => it['id'];
  const createSicakTarihGecikmeAnaliziEntity = (id: string, name = '') =>
    ({
      id,
      name: name || `name-${id}`,
    } as SicakTarihGecikmeAnaliziEntity);

  let state;

  beforeEach(() => {
    state = {
      sicakTarihGecikmeAnalizi: sicakTarihGecikmeAnaliziAdapter.setAll(
        [
          createSicakTarihGecikmeAnaliziEntity('PRODUCT-AAA'),
          createSicakTarihGecikmeAnaliziEntity('PRODUCT-BBB'),
          createSicakTarihGecikmeAnaliziEntity('PRODUCT-CCC'),
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

  describe('SicakTarihGecikmeAnalizi Selectors', () => {
    it('getAllSicakTarihGecikmeAnalizi() should return the list of SicakTarihGecikmeAnalizi', () => {
      const results = SicakTarihGecikmeAnaliziSelectors.getAllSicakTarihGecikmeAnalizi(state);
      const selId = getSicakTarihGecikmeAnaliziId(results[1]);

      expect(results.length).toBe(3);
      expect(selId).toBe('PRODUCT-BBB');
    });

    it('getSelected() should return the selected Entity', () => {
      const result = SicakTarihGecikmeAnaliziSelectors.getSelected(state);
      const selId = getSicakTarihGecikmeAnaliziId(result);

      expect(selId).toBe('PRODUCT-BBB');
    });

    it("getSicakTarihGecikmeAnaliziLoaded() should return the current 'loaded' status", () => {
      const result = SicakTarihGecikmeAnaliziSelectors.getSicakTarihGecikmeAnaliziLoaded(state);

      expect(result).toBe(true);
    });

    it("getSicakTarihGecikmeAnaliziError() should return the current 'error' state", () => {
      const result = SicakTarihGecikmeAnaliziSelectors.getSicakTarihGecikmeAnaliziError(state);

      expect(result).toBe(ERROR_MSG);
    });
  });
});
