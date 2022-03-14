import { Kt1232Entity } from './kt-1232.models';
import { kt1232Adapter, Kt1232PartialState, initialState } from './kt-1232.reducer';
import * as Kt1232Selectors from './kt-1232.selectors';

describe('Kt1232 Selectors', () => {
  const ERROR_MSG = 'No Error Available';
  const getKt1232Id = (it: Kt1232Entity) => it.id;
  const createKt1232Entity = (id: string, name = '') =>
    ({
      id,
      name: name || `name-${id}`,
    } as Kt1232Entity);

  let state: Kt1232PartialState;

  beforeEach(() => {
    state = {
      kt1232: kt1232Adapter.setAll(
        [createKt1232Entity('PRODUCT-AAA'), createKt1232Entity('PRODUCT-BBB'), createKt1232Entity('PRODUCT-CCC')],
        {
          ...initialState,
          selectedId: 'PRODUCT-BBB',
          error: ERROR_MSG,
          loaded: true,
        }
      ),
    };
  });

  describe('Kt1232 Selectors', () => {
    it('getAllKt1232() should return the list of Kt1232', () => {
      const results = Kt1232Selectors.getAllKt1232(state);
      const selId = getKt1232Id(results[1]);

      expect(results.length).toBe(3);
      expect(selId).toBe('PRODUCT-BBB');
    });

    it('getSelected() should return the selected Entity', () => {
      const result = Kt1232Selectors.getSelected(state) as Kt1232Entity;
      const selId = getKt1232Id(result);

      expect(selId).toBe('PRODUCT-BBB');
    });

    it('getKt1232Loaded() should return the current "loaded" status', () => {
      const result = Kt1232Selectors.getKt1232Loaded(state);

      expect(result).toBe(true);
    });

    it('getKt1232Error() should return the current "error" state', () => {
      const result = Kt1232Selectors.getKt1232Error(state);

      expect(result).toBe(ERROR_MSG);
    });
  });
});
