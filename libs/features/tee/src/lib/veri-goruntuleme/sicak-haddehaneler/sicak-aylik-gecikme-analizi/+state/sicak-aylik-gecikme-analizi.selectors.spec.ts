import { SicakAylikGecikmeAnaliziEntity } from './sicak-aylik-gecikme-analizi.models';
import { State, sicakAylikGecikmeAnaliziAdapter, initialState } from './sicak-aylik-gecikme-analizi.reducer';
import * as SicakAylikGecikmeAnaliziSelectors from './sicak-aylik-gecikme-analizi.selectors';

describe('SicakAylikGecikmeAnalizi Selectors', () => {
  const ERROR_MSG = 'No Error Available';
  const getSicakAylikGecikmeAnaliziId = (it) => it['id'];
  const createSicakAylikGecikmeAnaliziEntity = (id: string, name = '') =>
    ({
      id,
      name: name || `name-${id}`,
    } as SicakAylikGecikmeAnaliziEntity);

  let state;

  beforeEach(() => {
    state = {
      sicakAylikGecikmeAnalizi: sicakAylikGecikmeAnaliziAdapter.setAll(
        [
          createSicakAylikGecikmeAnaliziEntity('PRODUCT-AAA'),
          createSicakAylikGecikmeAnaliziEntity('PRODUCT-BBB'),
          createSicakAylikGecikmeAnaliziEntity('PRODUCT-CCC'),
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

  describe('SicakAylikGecikmeAnalizi Selectors', () => {
    it('getAllSicakAylikGecikmeAnalizi() should return the list of SicakAylikGecikmeAnalizi', () => {
      const results = SicakAylikGecikmeAnaliziSelectors.getAllSicakAylikGecikmeAnalizi(state);
      const selId = getSicakAylikGecikmeAnaliziId(results[1]);

      expect(results.length).toBe(3);
      expect(selId).toBe('PRODUCT-BBB');
    });

    it('getSelected() should return the selected Entity', () => {
      const result = SicakAylikGecikmeAnaliziSelectors.getSelected(state);
      const selId = getSicakAylikGecikmeAnaliziId(result);

      expect(selId).toBe('PRODUCT-BBB');
    });

    it("getSicakAylikGecikmeAnaliziLoaded() should return the current 'loaded' status", () => {
      const result = SicakAylikGecikmeAnaliziSelectors.getSicakAylikGecikmeAnaliziLoaded(state);

      expect(result).toBe(true);
    });

    it("getSicakAylikGecikmeAnaliziError() should return the current 'error' state", () => {
      const result = SicakAylikGecikmeAnaliziSelectors.getSicakAylikGecikmeAnaliziError(state);

      expect(result).toBe(ERROR_MSG);
    });
  });
});
