import { SogukAylikGecikmeAnaliziEntity } from './soguk-aylik-gecikme-analizi.models';
import { State, sogukAylikGecikmeAnaliziAdapter, initialState } from './soguk-aylik-gecikme-analizi.reducer';
import * as SogukAylikGecikmeAnaliziSelectors from './soguk-aylik-gecikme-analizi.selectors';

describe('SogukAylikGecikmeAnalizi Selectors', () => {
  const ERROR_MSG = 'No Error Available';
  const getSogukAylikGecikmeAnaliziId = (it) => it['id'];
  const createSogukAylikGecikmeAnaliziEntity = (id: string, name = '') =>
    ({
      id,
      name: name || `name-${id}`,
    } as SogukAylikGecikmeAnaliziEntity);

  let state;

  beforeEach(() => {
    state = {
      sogukAylikGecikmeAnalizi: sogukAylikGecikmeAnaliziAdapter.setAll(
        [
          createSogukAylikGecikmeAnaliziEntity('PRODUCT-AAA'),
          createSogukAylikGecikmeAnaliziEntity('PRODUCT-BBB'),
          createSogukAylikGecikmeAnaliziEntity('PRODUCT-CCC'),
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

  describe('SogukAylikGecikmeAnalizi Selectors', () => {
    it('getAllSogukAylikGecikmeAnalizi() should return the list of SogukAylikGecikmeAnalizi', () => {
      const results = SogukAylikGecikmeAnaliziSelectors.getAllSogukAylikGecikmeAnalizi(state);
      const selId = getSogukAylikGecikmeAnaliziId(results[1]);

      expect(results.length).toBe(3);
      expect(selId).toBe('PRODUCT-BBB');
    });

    it('getSelected() should return the selected Entity', () => {
      const result = SogukAylikGecikmeAnaliziSelectors.getSelected(state);
      const selId = getSogukAylikGecikmeAnaliziId(result);

      expect(selId).toBe('PRODUCT-BBB');
    });

    it("getSogukAylikGecikmeAnaliziLoaded() should return the current 'loaded' status", () => {
      const result = SogukAylikGecikmeAnaliziSelectors.getSogukAylikGecikmeAnaliziLoaded(state);

      expect(result).toBe(true);
    });

    it("getSogukAylikGecikmeAnaliziError() should return the current 'error' state", () => {
      const result = SogukAylikGecikmeAnaliziSelectors.getSogukAylikGecikmeAnaliziError(state);

      expect(result).toBe(ERROR_MSG);
    });
  });
});
