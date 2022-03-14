import { Kt1256Entity } from './kt-1256.models';
import { kt1256Adapter, Kt1256PartialState, initialState } from './kt-1256.reducer';
import * as Kt1256Selectors from './kt-1256.selectors';

describe('Kt1256 Selectors', () => {
  const ERROR_MSG = 'No Error Available';
  const getKt1256Id = (it: Kt1256Entity) => it.id;
  const createKt1256Entity = (id: string, name = '') =>
    ({
      id,
      name: name || `name-${id}`,
    } as Kt1256Entity);

  let state: Kt1256PartialState;

  beforeEach(() => {
    state = {
      kt1256: kt1256Adapter.setAll(
        [createKt1256Entity('PRODUCT-AAA'), createKt1256Entity('PRODUCT-BBB'), createKt1256Entity('PRODUCT-CCC')],
        {
          ...initialState,
          selectedId: 'PRODUCT-BBB',
          error: ERROR_MSG,
          loaded: true,
        }
      ),
    };
  });

  describe('Kt1256 Selectors', () => {
    it('getAllKt1256() should return the list of Kt1256', () => {
      const results = Kt1256Selectors.getAllKt1256(state);
      const selId = getKt1256Id(results[1]);

      expect(results.length).toBe(3);
      expect(selId).toBe('PRODUCT-BBB');
    });

    it('getSelected() should return the selected Entity', () => {
      const result = Kt1256Selectors.getSelected(state) as Kt1256Entity;
      const selId = getKt1256Id(result);

      expect(selId).toBe('PRODUCT-BBB');
    });

    it('getKt1256Loaded() should return the current "loaded" status', () => {
      const result = Kt1256Selectors.getKt1256Loaded(state);

      expect(result).toBe(true);
    });

    it('getKt1256Error() should return the current "error" state', () => {
      const result = Kt1256Selectors.getKt1256Error(state);

      expect(result).toBe(ERROR_MSG);
    });
  });
});
