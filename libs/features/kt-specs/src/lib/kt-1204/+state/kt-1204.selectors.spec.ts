import { Kt1204Entity } from './kt-1204.models';
import { kt1204Adapter, Kt1204PartialState, initialState } from './kt-1204.reducer';
import * as Kt1204Selectors from './kt-1204.selectors';

describe('Kt1204 Selectors', () => {
  const ERROR_MSG = 'No Error Available';
  const getKt1204Id = (it: Kt1204Entity) => it.id;
  const createKt1204Entity = (id: string, name = '') =>
    ({
      id,
      name: name || `name-${id}`,
    } as Kt1204Entity);

  let state: Kt1204PartialState;

  beforeEach(() => {
    state = {
      kt1204: kt1204Adapter.setAll(
        [createKt1204Entity('PRODUCT-AAA'), createKt1204Entity('PRODUCT-BBB'), createKt1204Entity('PRODUCT-CCC')],
        {
          ...initialState,
          selectedId: 'PRODUCT-BBB',
          error: ERROR_MSG,
          loaded: true,
        }
      ),
    };
  });

  describe('Kt1204 Selectors', () => {
    it('getAllKt1204() should return the list of Kt1204', () => {
      const results = Kt1204Selectors.getAllKt1204(state);
      const selId = getKt1204Id(results[1]);

      expect(results.length).toBe(3);
      expect(selId).toBe('PRODUCT-BBB');
    });

    it('getSelected() should return the selected Entity', () => {
      const result = Kt1204Selectors.getSelected(state) as Kt1204Entity;
      const selId = getKt1204Id(result);

      expect(selId).toBe('PRODUCT-BBB');
    });

    it('getKt1204Loaded() should return the current "loaded" status', () => {
      const result = Kt1204Selectors.getKt1204Loaded(state);

      expect(result).toBe(true);
    });

    it('getKt1204Error() should return the current "error" state', () => {
      const result = Kt1204Selectors.getKt1204Error(state);

      expect(result).toBe(ERROR_MSG);
    });
  });
});
