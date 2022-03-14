import { Kt1225Entity } from './kt-1225.models';
import { kt1225Adapter, Kt1225PartialState, initialState } from './kt-1225.reducer';
import * as Kt1225Selectors from './kt-1225.selectors';

describe('Kt1225 Selectors', () => {
  const ERROR_MSG = 'No Error Available';
  const getKt1225Id = (it: Kt1225Entity) => it.id;
  const createKt1225Entity = (id: string, name = '') =>
    ({
      id,
      name: name || `name-${id}`,
    } as Kt1225Entity);

  let state: Kt1225PartialState;

  beforeEach(() => {
    state = {
      kt1225: kt1225Adapter.setAll(
        [createKt1225Entity('PRODUCT-AAA'), createKt1225Entity('PRODUCT-BBB'), createKt1225Entity('PRODUCT-CCC')],
        {
          ...initialState,
          selectedId: 'PRODUCT-BBB',
          error: ERROR_MSG,
          loaded: true,
        }
      ),
    };
  });

  describe('Kt1225 Selectors', () => {
    it('getAllKt1225() should return the list of Kt1225', () => {
      const results = Kt1225Selectors.getAllKt1225(state);
      const selId = getKt1225Id(results[1]);

      expect(results.length).toBe(3);
      expect(selId).toBe('PRODUCT-BBB');
    });

    it('getSelected() should return the selected Entity', () => {
      const result = Kt1225Selectors.getSelected(state) as Kt1225Entity;
      const selId = getKt1225Id(result);

      expect(selId).toBe('PRODUCT-BBB');
    });

    it('getKt1225Loaded() should return the current "loaded" status', () => {
      const result = Kt1225Selectors.getKt1225Loaded(state);

      expect(result).toBe(true);
    });

    it('getKt1225Error() should return the current "error" state', () => {
      const result = Kt1225Selectors.getKt1225Error(state);

      expect(result).toBe(ERROR_MSG);
    });
  });
});
