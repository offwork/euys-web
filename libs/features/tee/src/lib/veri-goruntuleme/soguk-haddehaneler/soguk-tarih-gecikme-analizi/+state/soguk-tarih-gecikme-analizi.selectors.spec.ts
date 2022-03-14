import { SogukTarihGecikmeAnaliziEntity } from './soguk-tarih-gecikme-analizi.models';
import { State, sogukTarihGecikmeAnaliziAdapter, initialState } from './soguk-tarih-gecikme-analizi.reducer';
import * as SogukTarihGecikmeAnaliziSelectors from './soguk-tarih-gecikme-analizi.selectors';

describe('SogukTarihGecikmeAnalizi Selectors', () => {
  const ERROR_MSG = 'No Error Available';
  const getSogukTarihGecikmeAnaliziId = (it) => it['id'];
  const createSogukTarihGecikmeAnaliziEntity = (id: string, name = '') =>
    ({
      id,
      name: name || `name-${id}`,
    } as SogukTarihGecikmeAnaliziEntity);

  let state;

  beforeEach(() => {
    state = {
      sogukTarihGecikmeAnalizi: sogukTarihGecikmeAnaliziAdapter.setAll(
        [
          createSogukTarihGecikmeAnaliziEntity('PRODUCT-AAA'),
          createSogukTarihGecikmeAnaliziEntity('PRODUCT-BBB'),
          createSogukTarihGecikmeAnaliziEntity('PRODUCT-CCC'),
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

  describe('SogukTarihGecikmeAnalizi Selectors', () => {
    it('getAllSogukTarihGecikmeAnalizi() should return the list of SogukTarihGecikmeAnalizi', () => {
      const results = SogukTarihGecikmeAnaliziSelectors.getAllSogukTarihGecikmeAnalizi(state);
      const selId = getSogukTarihGecikmeAnaliziId(results[1]);

      expect(results.length).toBe(3);
      expect(selId).toBe('PRODUCT-BBB');
    });

    it('getSelected() should return the selected Entity', () => {
      const result = SogukTarihGecikmeAnaliziSelectors.getSelected(state);
      const selId = getSogukTarihGecikmeAnaliziId(result);

      expect(selId).toBe('PRODUCT-BBB');
    });

    it("getSogukTarihGecikmeAnaliziLoaded() should return the current 'loaded' status", () => {
      const result = SogukTarihGecikmeAnaliziSelectors.getSogukTarihGecikmeAnaliziLoaded(state);

      expect(result).toBe(true);
    });

    it("getSogukTarihGecikmeAnaliziError() should return the current 'error' state", () => {
      const result = SogukTarihGecikmeAnaliziSelectors.getSogukTarihGecikmeAnaliziError(state);

      expect(result).toBe(ERROR_MSG);
    });
  });
});
