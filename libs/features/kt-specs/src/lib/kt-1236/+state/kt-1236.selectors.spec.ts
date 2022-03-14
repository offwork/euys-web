import { Kt1236Entity } from './kt-1236.models';
import { kt1236Adapter, Kt1236PartialState, initialState } from './kt-1236.reducer';
import * as Kt1236Selectors from './kt-1236.selectors';

describe('Kt1236 Selectors', () => {
  const ERROR_MSG = 'No Error Available';
  const getKt1236Id = (it: Kt1236Entity) => it.id;
  const createKt1236Entity = (id: string, name = '') =>
    ({
      id,
      name: name || `name-${id}`,
    } as Kt1236Entity);

  let state: Kt1236PartialState;

  beforeEach(() => {
    state = {
      kt1236: kt1236Adapter.setAll(
        [createKt1236Entity('PRODUCT-AAA'), createKt1236Entity('PRODUCT-BBB'), createKt1236Entity('PRODUCT-CCC')],
        {
          ...initialState,
          selectedId: 'PRODUCT-BBB',
          error: ERROR_MSG,
          loaded: true,
        }
      ),
    };
  });

  describe('Kt1236 Selectors', () => {
    it('getAllKt1236() should return the list of Kt1236', () => {
      const results = Kt1236Selectors.getAllKt1236(state);
      const selId = getKt1236Id(results[1]);

      expect(results.length).toBe(3);
      expect(selId).toBe('PRODUCT-BBB');
    });

    it('getSelected() should return the selected Entity', () => {
      const result = Kt1236Selectors.getSelected(state) as Kt1236Entity;
      const selId = getKt1236Id(result);

      expect(selId).toBe('PRODUCT-BBB');
    });

    it('getKt1236Loaded() should return the current "loaded" status', () => {
      const result = Kt1236Selectors.getKt1236Loaded(state);

      expect(result).toBe(true);
    });

    it('getKt1236Error() should return the current "error" state', () => {
      const result = Kt1236Selectors.getKt1236Error(state);

      expect(result).toBe(ERROR_MSG);
    });
  });
});
