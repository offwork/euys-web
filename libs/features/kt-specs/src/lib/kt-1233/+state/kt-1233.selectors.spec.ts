import { Kt1233Entity } from './kt-1233.models';
import { kt1233Adapter, Kt1233PartialState, initialState } from './kt-1233.reducer';
import * as Kt1233Selectors from './kt-1233.selectors';

describe('Kt1233 Selectors', () => {
  const ERROR_MSG = 'No Error Available';
  const getKt1233Id = (it: Kt1233Entity) => it.id;
  const createKt1233Entity = (id: string, name = '') =>
    ({
      id,
      name: name || `name-${id}`,
    } as Kt1233Entity);

  let state: Kt1233PartialState;

  beforeEach(() => {
    state = {
      kt1233: kt1233Adapter.setAll(
        [createKt1233Entity('PRODUCT-AAA'), createKt1233Entity('PRODUCT-BBB'), createKt1233Entity('PRODUCT-CCC')],
        {
          ...initialState,
          selectedId: 'PRODUCT-BBB',
          error: ERROR_MSG,
          loaded: true,
        }
      ),
    };
  });

  describe('Kt1233 Selectors', () => {
    it('getAllKt1233() should return the list of Kt1233', () => {
      const results = Kt1233Selectors.getAllKt1233(state);
      const selId = getKt1233Id(results[1]);

      expect(results.length).toBe(3);
      expect(selId).toBe('PRODUCT-BBB');
    });

    it('getSelected() should return the selected Entity', () => {
      const result = Kt1233Selectors.getSelected(state) as Kt1233Entity;
      const selId = getKt1233Id(result);

      expect(selId).toBe('PRODUCT-BBB');
    });

    it('getKt1233Loaded() should return the current "loaded" status', () => {
      const result = Kt1233Selectors.getKt1233Loaded(state);

      expect(result).toBe(true);
    });

    it('getKt1233Error() should return the current "error" state', () => {
      const result = Kt1233Selectors.getKt1233Error(state);

      expect(result).toBe(ERROR_MSG);
    });
  });
});
