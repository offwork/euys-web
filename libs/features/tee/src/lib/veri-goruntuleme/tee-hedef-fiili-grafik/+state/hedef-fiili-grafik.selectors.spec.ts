import { HedefFiiliGrafikEntity } from './hedef-fiili-grafik.models';
import { State, hedefFiiliGrafikAdapter, initialState } from './hedef-fiili-grafik.reducer';
import * as HedefFiiliGrafikSelectors from './hedef-fiili-grafik.selectors';

describe('HedefFiiliGrafik Selectors', () => {
  const ERROR_MSG = 'No Error Available';
  const getHedefFiiliGrafikId = (it) => it['id'];
  const createHedefFiiliGrafikEntity = (id: string, name = '') =>
    ({
      id,
      name: name || `name-${id}`,
    } as HedefFiiliGrafikEntity);

  let state;

  beforeEach(() => {
    state = {
      hedefFiiliGrafik: hedefFiiliGrafikAdapter.setAll(
        [
          createHedefFiiliGrafikEntity('PRODUCT-AAA'),
          createHedefFiiliGrafikEntity('PRODUCT-BBB'),
          createHedefFiiliGrafikEntity('PRODUCT-CCC'),
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

  describe('HedefFiiliGrafik Selectors', () => {
    it('getAllHedefFiiliGrafik() should return the list of HedefFiiliGrafik', () => {
      const results = HedefFiiliGrafikSelectors.getHedefFiiliGrafik(state);
      const selId = getHedefFiiliGrafikId(results[1]);

      expect(results.length).toBe(3);
      expect(selId).toBe('PRODUCT-BBB');
    });

    it('getSelected() should return the selected Entity', () => {
      const result = HedefFiiliGrafikSelectors.getSelected(state);
      const selId = getHedefFiiliGrafikId(result);

      expect(selId).toBe('PRODUCT-BBB');
    });

    it("getHedefFiiliGrafikLoaded() should return the current 'loaded' status", () => {
      const result = HedefFiiliGrafikSelectors.getHedefFiiliGrafikLoaded(state);

      expect(result).toBe(true);
    });

    it("getHedefFiiliGrafikError() should return the current 'error' state", () => {
      const result = HedefFiiliGrafikSelectors.getHedefFiiliGrafikError(state);

      expect(result).toBe(ERROR_MSG);
    });
  });
});
