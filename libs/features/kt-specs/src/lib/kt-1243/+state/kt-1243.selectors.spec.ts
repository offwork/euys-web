import { Kt1243Entity } from './kt-1243.models';
import { kt1243Adapter, Kt1243PartialState, initialState } from './kt-1243.reducer';
import * as Kt1243Selectors from './kt-1243.selectors';

describe('Kt1243 Selectors', () => {
  const ERROR_MSG = 'No Error Available';
  const getKt1243Id = (it: Kt1243Entity) => it.id;
  const createKt1243Entity = (id: string, name = '') =>
    ({
      id,
      name: name || `name-${id}`,
    } as Kt1243Entity);

  let state: Kt1243PartialState;

  beforeEach(() => {
    state = {
      kt1243: kt1243Adapter.setAll(
        [createKt1243Entity('PRODUCT-AAA'), createKt1243Entity('PRODUCT-BBB'), createKt1243Entity('PRODUCT-CCC')],
        {
          ...initialState,
          selectedId: 'PRODUCT-BBB',
          error: ERROR_MSG,
          loaded: true,
        }
      ),
    };
  });

  describe('Kt1243 Selectors', () => {
    it('getAllKt1243() should return the list of Kt1243', () => {
      const results = Kt1243Selectors.getAllKt1243(state);
      const selId = getKt1243Id(results[1]);

      expect(results.length).toBe(3);
      expect(selId).toBe('PRODUCT-BBB');
    });

    it('getSelected() should return the selected Entity', () => {
      const result = Kt1243Selectors.getSelected(state) as Kt1243Entity;
      const selId = getKt1243Id(result);

      expect(selId).toBe('PRODUCT-BBB');
    });

    it('getKt1243Loaded() should return the current "loaded" status', () => {
      const result = Kt1243Selectors.getKt1243Loaded(state);

      expect(result).toBe(true);
    });

    it('getKt1243Error() should return the current "error" state', () => {
      const result = Kt1243Selectors.getKt1243Error(state);

      expect(result).toBe(ERROR_MSG);
    });
  });
});
