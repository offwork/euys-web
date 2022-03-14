import { Kt1219Entity } from './kt-1219.models';
import { kt1219Adapter, Kt1219PartialState, initialState } from './kt-1219.reducer';
import * as Kt1219Selectors from './kt-1219.selectors';

describe('Kt1219 Selectors', () => {
  const ERROR_MSG = 'No Error Available';
  const getKt1219Id = (it: Kt1219Entity) => it.id;
  const createKt1219Entity = (id: string, name = '') =>
    ({
      id,
      name: name || `name-${id}`,
    } as Kt1219Entity);

  let state: Kt1219PartialState;

  beforeEach(() => {
    state = {
      kt1201: kt1219Adapter.setAll(
        [createKt1219Entity('PRODUCT-AAA'), createKt1219Entity('PRODUCT-BBB'), createKt1219Entity('PRODUCT-CCC')],
        {
          ...initialState,
          selectedId: 'PRODUCT-BBB',
          error: ERROR_MSG,
          loaded: true,
        }
      ),
    };
  });

  describe('Kt1219 Selectors', () => {
    it('getAllKt1219() should return the list of Kt1219', () => {
      const results = Kt1219Selectors.getAllKt1219(state);
      const selId = getKt1219Id(results[1]);

      expect(results.length).toBe(3);
      expect(selId).toBe('PRODUCT-BBB');
    });

    it('getSelected() should return the selected Entity', () => {
      const result = Kt1219Selectors.getSelected(state) as Kt1219Entity;
      const selId = getKt1219Id(result);

      expect(selId).toBe('PRODUCT-BBB');
    });

    it('getKt1219Loaded() should return the current "loaded" status', () => {
      const result = Kt1219Selectors.getKt1219Loaded(state);

      expect(result).toBe(true);
    });

    it('getKt1219Error() should return the current "error" state', () => {
      const result = Kt1219Selectors.getKt1219Error(state);

      expect(result).toBe(ERROR_MSG);
    });
  });
});
