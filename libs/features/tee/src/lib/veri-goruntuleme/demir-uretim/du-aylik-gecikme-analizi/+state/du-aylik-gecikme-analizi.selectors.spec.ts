import { DuAylikGecikmeAnaliziEntity } from './du-aylik-gecikme-analizi.models';
import { State, duAylikGecikmeAnaliziAdapter, initialState } from './du-aylik-gecikme-analizi.reducer';
import * as DuAylikGecikmeAnaliziSelectors from './du-aylik-gecikme-analizi.selectors';

describe('DuAylikGecikmeAnalizi Selectors', () => {
  const ERROR_MSG = 'No Error Available';
  const getDuAylikGecikmeAnaliziId = (it) => it['id'];
  const createDuAylikGecikmeAnaliziEntity = (id: string, name = '') =>
    ({
      id,
      name: name || `name-${id}`,
    } as DuAylikGecikmeAnaliziEntity);

  let state;

  beforeEach(() => {
    state = {
      duAylikGecikmeAnalizi: duAylikGecikmeAnaliziAdapter.setAll(
        [
          createDuAylikGecikmeAnaliziEntity('PRODUCT-AAA'),
          createDuAylikGecikmeAnaliziEntity('PRODUCT-BBB'),
          createDuAylikGecikmeAnaliziEntity('PRODUCT-CCC'),
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

  describe('DuAylikGecikmeAnalizi Selectors', () => {
    it('getAllDuAylikGecikmeAnalizi() should return the list of DuAylikGecikmeAnalizi', () => {
      const results = DuAylikGecikmeAnaliziSelectors.getAllDuAylikGecikmeAnalizi(state);
      const selId = getDuAylikGecikmeAnaliziId(results[1]);

      expect(results.length).toBe(3);
      expect(selId).toBe('PRODUCT-BBB');
    });

    it('getSelected() should return the selected Entity', () => {
      const result = DuAylikGecikmeAnaliziSelectors.getSelected(state);
      const selId = getDuAylikGecikmeAnaliziId(result);

      expect(selId).toBe('PRODUCT-BBB');
    });

    it("getDuAylikGecikmeAnaliziLoaded() should return the current 'loaded' status", () => {
      const result = DuAylikGecikmeAnaliziSelectors.getDuAylikGecikmeAnaliziLoaded(state);

      expect(result).toBe(true);
    });

    it("getDuAylikGecikmeAnaliziError() should return the current 'error' state", () => {
      const result = DuAylikGecikmeAnaliziSelectors.getDuAylikGecikmeAnaliziError(state);

      expect(result).toBe(ERROR_MSG);
    });
  });
});
