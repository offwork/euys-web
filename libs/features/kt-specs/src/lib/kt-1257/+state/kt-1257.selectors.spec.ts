import { Kt1257Entity } from './kt-1257.models';
import { kt1257Adapter, Kt1257PartialState, initialState } from './kt-1257.reducer';
import * as Kt1257Selectors from './kt-1257.selectors';

describe('Kt1257 Selectors', () => {
  const ERROR_MSG = 'No Error Available';
  const getKt1257Id = (it: Kt1257Entity) => it.id;
  const createKt1257Entity = (id: string, name = '') =>
    ({
      id,
      name: name || `name-${id}`,
    } as Kt1257Entity);

  let state: Kt1257PartialState;

  beforeEach(() => {
    state = {
      kt1257: kt1257Adapter.setAll(
        [createKt1257Entity('PRODUCT-AAA'), createKt1257Entity('PRODUCT-BBB'), createKt1257Entity('PRODUCT-CCC')],
        {
          ...initialState,
          selectedId: 'PRODUCT-BBB',
          error: ERROR_MSG,
          loaded: true,
        }
      ),
    };
  });

  describe('Kt1257 Selectors', () => {
    it('getAllKt1257() should return the list of Kt1257', () => {
      const results = Kt1257Selectors.getAllKt1257(state);
      const selId = getKt1257Id(results[1]);

      expect(results.length).toBe(3);
      expect(selId).toBe('PRODUCT-BBB');
    });

    it('getSelected() should return the selected Entity', () => {
      const result = Kt1257Selectors.getSelected(state) as Kt1257Entity;
      const selId = getKt1257Id(result);

      expect(selId).toBe('PRODUCT-BBB');
    });

    it('getKt1257Loaded() should return the current "loaded" status', () => {
      const result = Kt1257Selectors.getKt1257Loaded(state);

      expect(result).toBe(true);
    });

    it('getKt1257Error() should return the current "error" state', () => {
      const result = Kt1257Selectors.getKt1257Error(state);

      expect(result).toBe(ERROR_MSG);
    });
  });
});
