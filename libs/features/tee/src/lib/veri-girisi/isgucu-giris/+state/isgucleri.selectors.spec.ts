import { IsgucleriEntity } from './isgucleri.models';
import { State, isgucleriAdapter, initialState } from './isgucleri.reducer';
import * as IsgucleriSelectors from './isgucleri.selectors';

describe('Isgucleri Selectors', () => {
  const ERROR_MSG = 'No Error Available';
  const getIsgucleriId = (it) => it['id'];
  const createIsgucleriEntity = (id: string, name = '') =>
    ({
      id,
      name: name || `name-${id}`,
    } as IsgucleriEntity);

  let state;

  beforeEach(() => {
    state = {
      isgucleri: isgucleriAdapter.setAll(
        [
          createIsgucleriEntity('PRODUCT-AAA'),
          createIsgucleriEntity('PRODUCT-BBB'),
          createIsgucleriEntity('PRODUCT-CCC'),
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

  describe('Isgucleri Selectors', () => {
    it('getAllIsgucleri() should return the list of Isgucleri', () => {
      const results = IsgucleriSelectors.getAllIsgucleri(state);
      const selId = getIsgucleriId(results[1]);

      expect(results.length).toBe(3);
      expect(selId).toBe('PRODUCT-BBB');
    });

    it('getSelected() should return the selected Entity', () => {
      const result = IsgucleriSelectors.getSelected(state);
      const selId = getIsgucleriId(result);

      expect(selId).toBe('PRODUCT-BBB');
    });

    it("getIsgucleriLoaded() should return the current 'loaded' status", () => {
      const result = IsgucleriSelectors.getIsgucleriLoaded(state);

      expect(result).toBe(true);
    });

    it("getIsgucleriError() should return the current 'error' state", () => {
      const result = IsgucleriSelectors.getIsgucleriError(state);

      expect(result).toBe(ERROR_MSG);
    });
  });
});
