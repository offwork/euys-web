import { Kt1234Entity } from './kt-1234.models';
import { kt1234Adapter, Kt1234PartialState, initialState } from './kt-1234.reducer';
import * as Kt1234Selectors from './kt-1234.selectors';

describe('Kt1234 Selectors', () => {
  const ERROR_MSG = 'No Error Available';
  const getKt1234Id = (it: Kt1234Entity) => it.id;
  const createKt1234Entity = (id: string, name = '') =>
    ({
      id,
      name: name || `name-${id}`,
    } as Kt1234Entity);

  let state: Kt1234PartialState;

  beforeEach(() => {
    state = {
      kt1234: kt1234Adapter.setAll(
        [createKt1234Entity('PRODUCT-AAA'), createKt1234Entity('PRODUCT-BBB'), createKt1234Entity('PRODUCT-CCC')],
        {
          ...initialState,
          selectedId: 'PRODUCT-BBB',
          error: ERROR_MSG,
          loaded: true,
        }
      ),
    };
  });

  describe('Kt1234 Selectors', () => {
    it('getAllKt1234() should return the list of Kt1234', () => {
      const results = Kt1234Selectors.getAllKt1234(state);
      const selId = getKt1234Id(results[1]);

      expect(results.length).toBe(3);
      expect(selId).toBe('PRODUCT-BBB');
    });

    it('getSelected() should return the selected Entity', () => {
      const result = Kt1234Selectors.getSelected(state) as Kt1234Entity;
      const selId = getKt1234Id(result);

      expect(selId).toBe('PRODUCT-BBB');
    });

    it('getKt1234Loaded() should return the current "loaded" status', () => {
      const result = Kt1234Selectors.getKt1234Loaded(state);

      expect(result).toBe(true);
    });

    it('getKt1234Error() should return the current "error" state', () => {
      const result = Kt1234Selectors.getKt1234Error(state);

      expect(result).toBe(ERROR_MSG);
    });
  });
});
