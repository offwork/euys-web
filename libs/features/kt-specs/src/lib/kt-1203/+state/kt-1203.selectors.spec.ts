import { Kt1203Entity } from './kt-1203.models';
import { kt1203Adapter, Kt1203PartialState, initialState } from './kt-1203.reducer';
import * as Kt1203Selectors from './kt-1203.selectors';

describe('Kt1203 Selectors', () => {
  const ERROR_MSG = 'No Error Available';
  const getKt1203Id = (it: Kt1203Entity) => it.id;
  const createKt1203Entity = (id: string, name = '') =>
    ({
      id,
      name: name || `name-${id}`,
    } as Kt1203Entity);

  let state: Kt1203PartialState;

  beforeEach(() => {
    state = {
      kt1203: kt1203Adapter.setAll(
        [createKt1203Entity('PRODUCT-AAA'), createKt1203Entity('PRODUCT-BBB'), createKt1203Entity('PRODUCT-CCC')],
        {
          ...initialState,
          selectedId: 'PRODUCT-BBB',
          error: ERROR_MSG,
          loaded: true,
        }
      ),
    };
  });

  describe('Kt1203 Selectors', () => {
    it('getAllKt1203() should return the list of Kt1203', () => {
      const results = Kt1203Selectors.getAllKt1203(state);
      const selId = getKt1203Id(results[1]);

      expect(results.length).toBe(3);
      expect(selId).toBe('PRODUCT-BBB');
    });

    it('getSelected() should return the selected Entity', () => {
      const result = Kt1203Selectors.getSelected(state) as Kt1203Entity;
      const selId = getKt1203Id(result);

      expect(selId).toBe('PRODUCT-BBB');
    });

    it('getKt1203Loaded() should return the current "loaded" status', () => {
      const result = Kt1203Selectors.getKt1203Loaded(state);

      expect(result).toBe(true);
    });

    it('getKt1203Error() should return the current "error" state', () => {
      const result = Kt1203Selectors.getKt1203Error(state);

      expect(result).toBe(ERROR_MSG);
    });
  });
});
