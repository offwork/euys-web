import { KapasitelerEntity } from './kapasiteler.models';
import { State, kapasitelerAdapter, initialState } from './kapasiteler.reducer';
import * as KapasitelerSelectors from './kapasiteler.selectors';

describe('Kapasiteler Selectors', () => {
  const ERROR_MSG = 'No Error Available';
  const getKapasitelerId = (it) => it['id'];
  const createKapasitelerEntity = (id: string, name = '') =>
    ({
      id,
      name: name || `name-${id}`,
    } as KapasitelerEntity);

  let state;

  beforeEach(() => {
    state = {
      kapasiteler: kapasitelerAdapter.setAll(
        [
          createKapasitelerEntity('PRODUCT-AAA'),
          createKapasitelerEntity('PRODUCT-BBB'),
          createKapasitelerEntity('PRODUCT-CCC'),
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

  describe('Kapasiteler Selectors', () => {
    it('getAllKapasiteler() should return the list of Kapasiteler', () => {
      const results = KapasitelerSelectors.getAllKapasiteler(state);
      const selId = getKapasitelerId(results[1]);

      expect(results.length).toBe(3);
      expect(selId).toBe('PRODUCT-BBB');
    });

    it('getSelected() should return the selected Entity', () => {
      const result = KapasitelerSelectors.getSelected(state);
      const selId = getKapasitelerId(result);

      expect(selId).toBe('PRODUCT-BBB');
    });

    it("getKapasitelerLoaded() should return the current 'loaded' status", () => {
      const result = KapasitelerSelectors.getKapasitelerLoaded(state);

      expect(result).toBe(true);
    });

    it("getKapasitelerError() should return the current 'error' state", () => {
      const result = KapasitelerSelectors.getKapasitelerError(state);

      expect(result).toBe(ERROR_MSG);
    });
  });
});
