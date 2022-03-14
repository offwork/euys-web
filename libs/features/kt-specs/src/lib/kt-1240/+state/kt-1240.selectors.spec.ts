import { Kt1240Entity } from './kt-1240.models';
import { kt1240Adapter, Kt1240PartialState, initialState } from './kt-1240.reducer';
import * as Kt1240Selectors from './kt-1240.selectors';

describe('Kt1240 Selectors', () => {
  const ERROR_MSG = 'No Error Available';
  const getKt1240Id = (it: Kt1240Entity) => it.id;
  const createKt1240Entity = (id: string, name = '') =>
    ({
      id,
      name: name || `name-${id}`,
    } as Kt1240Entity);

  let state: Kt1240PartialState;

  beforeEach(() => {
    state = {
      kt1240: kt1240Adapter.setAll(
        [createKt1240Entity('PRODUCT-AAA'), createKt1240Entity('PRODUCT-BBB'), createKt1240Entity('PRODUCT-CCC')],
        {
          ...initialState,
          selectedId: 'PRODUCT-BBB',
          error: ERROR_MSG,
          loaded: true,
        }
      ),
    };
  });

  describe('Kt1240 Selectors', () => {
    it('getAllKt1240() should return the list of Kt1240', () => {
      const results = Kt1240Selectors.getAllKt1240(state);
      const selId = getKt1240Id(results[1]);

      expect(results.length).toBe(3);
      expect(selId).toBe('PRODUCT-BBB');
    });

    it('getSelected() should return the selected Entity', () => {
      const result = Kt1240Selectors.getSelected(state) as Kt1240Entity;
      const selId = getKt1240Id(result);

      expect(selId).toBe('PRODUCT-BBB');
    });

    it('getKt1240Loaded() should return the current "loaded" status', () => {
      const result = Kt1240Selectors.getKt1240Loaded(state);

      expect(result).toBe(true);
    });

    it('getKt1240Error() should return the current "error" state', () => {
      const result = Kt1240Selectors.getKt1240Error(state);

      expect(result).toBe(ERROR_MSG);
    });
  });
});
