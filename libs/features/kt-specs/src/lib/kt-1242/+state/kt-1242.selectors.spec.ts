import { Kt1242Entity } from './kt-1242.models';
import { kt1242Adapter, Kt1242PartialState, initialState } from './kt-1242.reducer';
import * as Kt1242Selectors from './kt-1242.selectors';

describe('Kt1242 Selectors', () => {
  const ERROR_MSG = 'No Error Available';
  const getKt1242Id = (it: Kt1242Entity) => it.id;
  const createKt1242Entity = (id: string, name = '') =>
    ({
      id,
      name: name || `name-${id}`,
    } as Kt1242Entity);

  let state: Kt1242PartialState;

  beforeEach(() => {
    state = {
      kt1242: kt1242Adapter.setAll(
        [createKt1242Entity('PRODUCT-AAA'), createKt1242Entity('PRODUCT-BBB'), createKt1242Entity('PRODUCT-CCC')],
        {
          ...initialState,
          selectedId: 'PRODUCT-BBB',
          error: ERROR_MSG,
          loaded: true,
        }
      ),
    };
  });

  describe('Kt1242 Selectors', () => {
    it('getAllKt1242() should return the list of Kt1242', () => {
      const results = Kt1242Selectors.getAllKt1242(state);
      const selId = getKt1242Id(results[1]);

      expect(results.length).toBe(3);
      expect(selId).toBe('PRODUCT-BBB');
    });

    it('getSelected() should return the selected Entity', () => {
      const result = Kt1242Selectors.getSelected(state) as Kt1242Entity;
      const selId = getKt1242Id(result);

      expect(selId).toBe('PRODUCT-BBB');
    });

    it('getKt1242Loaded() should return the current "loaded" status', () => {
      const result = Kt1242Selectors.getKt1242Loaded(state);

      expect(result).toBe(true);
    });

    it('getKt1242Error() should return the current "error" state', () => {
      const result = Kt1242Selectors.getKt1242Error(state);

      expect(result).toBe(ERROR_MSG);
    });
  });
});
