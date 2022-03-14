import { HedeflerEntity } from './hedefler.models';
import { State, hedeflerAdapter, initialState } from './hedefler.reducer';
import * as HedeflerSelectors from './hedefler.selectors';

describe('Hedefler Selectors', () => {
  const ERROR_MSG = 'No Error Available';
  const getHedeflerId = (it) => it['id'];
  const createHedeflerEntity = (id: string, name = '') =>
    ({
      id,
      name: name || `name-${id}`,
    } as HedeflerEntity);

  let state;

  beforeEach(() => {
    state = {
      hedefler: hedeflerAdapter.setAll(
        [createHedeflerEntity('PRODUCT-AAA'), createHedeflerEntity('PRODUCT-BBB'), createHedeflerEntity('PRODUCT-CCC')],
        {
          ...initialState,
          selectedId: 'PRODUCT-BBB',
          error: ERROR_MSG,
          loaded: true,
        }
      ),
    };
  });

  describe('Hedefler Selectors', () => {
    it('getAllHedefler() should return the list of Hedefler', () => {
      const results = HedeflerSelectors.getAllHedefler(state);
      const selId = getHedeflerId(results[1]);

      expect(results.length).toBe(3);
      expect(selId).toBe('PRODUCT-BBB');
    });

    it('getSelected() should return the selected Entity', () => {
      const result = HedeflerSelectors.getSelected(state);
      const selId = getHedeflerId(result);

      expect(selId).toBe('PRODUCT-BBB');
    });

    it("getHedeflerLoaded() should return the current 'loaded' status", () => {
      const result = HedeflerSelectors.getHedeflerLoaded(state);

      expect(result).toBe(true);
    });

    it("getHedeflerError() should return the current 'error' state", () => {
      const result = HedeflerSelectors.getHedeflerError(state);

      expect(result).toBe(ERROR_MSG);
    });
  });
});
