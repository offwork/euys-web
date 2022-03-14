import { BazAnaBilgilerEntity } from './baz-ana-bilgiler.models';
import { bazAnaBilgilerAdapter, BazAnaBilgilerPartialState, initialState } from './baz-ana-bilgiler.reducer';
import * as BazAnaBilgilerSelectors from './baz-ana-bilgiler.selectors';

describe('BazAnaBilgiler Selectors', () => {
  const ERROR_MSG = 'No Error Available';
  const getBazAnaBilgilerId = (it: BazAnaBilgilerEntity) => it.id;
  const createBazAnaBilgilerEntity = (id: string, name = '') =>
    ({
      id,
      name: name || `name-${id}`,
    } as BazAnaBilgilerEntity);

  let state: BazAnaBilgilerPartialState;

  beforeEach(() => {
    state = {
      bazAnaBilgiler: bazAnaBilgilerAdapter.setAll(
        [
          createBazAnaBilgilerEntity('PRODUCT-AAA'),
          createBazAnaBilgilerEntity('PRODUCT-BBB'),
          createBazAnaBilgilerEntity('PRODUCT-CCC'),
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

  describe('BazAnaBilgiler Selectors', () => {
    it('getAllBazAnaBilgiler() should return the list of BazAnaBilgiler', () => {
      const results = BazAnaBilgilerSelectors.getAllBazAnaBilgiler(state);
      const selId = getBazAnaBilgilerId(results[1]);

      expect(results.length).toBe(3);
      expect(selId).toBe('PRODUCT-BBB');
    });

    it('getSelected() should return the selected Entity', () => {
      const result = BazAnaBilgilerSelectors.getSelected(state) as BazAnaBilgilerEntity;
      const selId = getBazAnaBilgilerId(result);

      expect(selId).toBe('PRODUCT-BBB');
    });

    it('getBazAnaBilgilerLoaded() should return the current "loaded" status', () => {
      const result = BazAnaBilgilerSelectors.getBazAnaBilgilerLoaded(state);

      expect(result).toBe(true);
    });

    it('getBazAnaBilgilerError() should return the current "error" state', () => {
      const result = BazAnaBilgilerSelectors.getBazAnaBilgilerError(state);

      expect(result).toBe(ERROR_MSG);
    });
  });
});
