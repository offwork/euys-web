import { RaporIndirmeEntity } from './rapor-indirme.models';
import { State, raporIndirmeAdapter, initialState } from './rapor-indirme.reducer';
import * as RaporIndirmeSelectors from './rapor-indirme.selectors';

describe('RaporIndirme Selectors', () => {
  const ERROR_MSG = 'No Error Available';
  const getRaporIndirmeId = (it) => it['id'];
  const createRaporIndirmeEntity = (id: string, name = '') =>
    ({
      id,
      name: name || `name-${id}`,
    } as RaporIndirmeEntity);

  let state;

  beforeEach(() => {
    state = {
      raporIndirme: raporIndirmeAdapter.setAll(
        [
          createRaporIndirmeEntity('PRODUCT-AAA'),
          createRaporIndirmeEntity('PRODUCT-BBB'),
          createRaporIndirmeEntity('PRODUCT-CCC'),
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

  describe('RaporIndirme Selectors', () => {
    it('getAllRaporIndirme() should return the list of RaporIndirme', () => {
      const results = RaporIndirmeSelectors.getAllRaporIndirme(state);
      const selId = getRaporIndirmeId(results[1]);

      expect(results.length).toBe(3);
      expect(selId).toBe('PRODUCT-BBB');
    });

    it('getSelected() should return the selected Entity', () => {
      const result = RaporIndirmeSelectors.getSelected(state);
      const selId = getRaporIndirmeId(result);

      expect(selId).toBe('PRODUCT-BBB');
    });

    it("getRaporIndirmeLoaded() should return the current 'loaded' status", () => {
      const result = RaporIndirmeSelectors.getRaporIndirmeLoaded(state);

      expect(result).toBe(true);
    });

    it("getRaporIndirmeError() should return the current 'error' state", () => {
      const result = RaporIndirmeSelectors.getRaporIndirmeError(state);

      expect(result).toBe(ERROR_MSG);
    });
  });
});
