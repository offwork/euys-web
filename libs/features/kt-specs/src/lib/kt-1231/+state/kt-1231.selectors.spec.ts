import { Kt1231Entity } from './kt-1231.models';
import { kt1231Adapter, Kt1231PartialState, initialState } from './kt-1231.reducer';
import * as Kt1231Selectors from './kt-1231.selectors';

describe('Kt1231 Selectors', () => {
  const ERROR_MSG = 'No Error Available';
  const getKt1231Id = (it: Kt1231Entity) => it.id;
  const createKt1231Entity = (id: string, name = '') =>
    ({
      id,
      name: name || `name-${id}`,
    } as Kt1231Entity);

  let state: Kt1231PartialState;

  beforeEach(() => {
    state = {
      kt1231: kt1231Adapter.setAll(
        [createKt1231Entity('PRODUCT-AAA'), createKt1231Entity('PRODUCT-BBB'), createKt1231Entity('PRODUCT-CCC')],
        {
          ...initialState,
          selectedId: 'PRODUCT-BBB',
          error: ERROR_MSG,
          loaded: true,
        }
      ),
    };
  });

  describe('Kt1231 Selectors', () => {
    it('getAllKt1231() should return the list of Kt1231', () => {
      const results = Kt1231Selectors.getAllKt1231(state);
      const selId = getKt1231Id(results[1]);

      expect(results.length).toBe(3);
      expect(selId).toBe('PRODUCT-BBB');
    });

    it('getSelected() should return the selected Entity', () => {
      const result = Kt1231Selectors.getSelected(state) as Kt1231Entity;
      const selId = getKt1231Id(result);

      expect(selId).toBe('PRODUCT-BBB');
    });

    it('getKt1231Loaded() should return the current "loaded" status', () => {
      const result = Kt1231Selectors.getKt1231Loaded(state);

      expect(result).toBe(true);
    });

    it('getKt1231Error() should return the current "error" state', () => {
      const result = Kt1231Selectors.getKt1231Error(state);

      expect(result).toBe(ERROR_MSG);
    });
  });
});
