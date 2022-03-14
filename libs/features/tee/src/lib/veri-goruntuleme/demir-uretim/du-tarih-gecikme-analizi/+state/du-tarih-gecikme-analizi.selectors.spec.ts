import { DuTarihGecikmeAnaliziEntity } from './du-tarih-gecikme-analizi.models';
import { State, duTarihGecikmeAnaliziAdapter, initialState } from './du-tarih-gecikme-analizi.reducer';
import * as DuTarihGecikmeAnaliziSelectors from './du-tarih-gecikme-analizi.selectors';

describe('DuTarihGecikmeAnalizi Selectors', () => {
  const ERROR_MSG = 'No Error Available';
  const getDuTarihGecikmeAnaliziId = (it) => it['id'];
  const createDuTarihGecikmeAnaliziEntity = (id: string, name = '') =>
    ({
      id,
      name: name || `name-${id}`,
    } as DuTarihGecikmeAnaliziEntity);

  let state;

  beforeEach(() => {
    state = {
      duTarihGecikmeAnalizi: duTarihGecikmeAnaliziAdapter.setAll(
        [
          createDuTarihGecikmeAnaliziEntity('PRODUCT-AAA'),
          createDuTarihGecikmeAnaliziEntity('PRODUCT-BBB'),
          createDuTarihGecikmeAnaliziEntity('PRODUCT-CCC'),
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

  describe('DuTarihGecikmeAnalizi Selectors', () => {
    it('getAllDuTarihGecikmeAnalizi() should return the list of DuTarihGecikmeAnalizi', () => {
      const results = DuTarihGecikmeAnaliziSelectors.getAllDuTarihGecikmeAnalizi(state);
      const selId = getDuTarihGecikmeAnaliziId(results[1]);

      expect(results.length).toBe(3);
      expect(selId).toBe('PRODUCT-BBB');
    });

    it('getSelected() should return the selected Entity', () => {
      const result = DuTarihGecikmeAnaliziSelectors.getSelected(state);
      const selId = getDuTarihGecikmeAnaliziId(result);

      expect(selId).toBe('PRODUCT-BBB');
    });

    it("getDuTarihGecikmeAnaliziLoaded() should return the current 'loaded' status", () => {
      const result = DuTarihGecikmeAnaliziSelectors.getDuTarihGecikmeAnaliziLoaded(state);

      expect(result).toBe(true);
    });

    it("getDuTarihGecikmeAnaliziError() should return the current 'error' state", () => {
      const result = DuTarihGecikmeAnaliziSelectors.getDuTarihGecikmeAnaliziError(state);

      expect(result).toBe(ERROR_MSG);
    });
  });
});
