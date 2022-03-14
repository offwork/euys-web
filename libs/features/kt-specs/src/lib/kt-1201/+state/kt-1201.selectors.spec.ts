import { Kt1201Entity } from './kt-1201.models';
import { kt1201Adapter, Kt1201PartialState, initialState } from './kt-1201.reducer';
import * as Kt1201Selectors from './kt-1201.selectors';

describe('Kt1201 Selectors', () => {
  const ERROR_MSG = 'No Error Available';
  const getKt1201Id = (it: Kt1201Entity) => it.id;
  const createKt1201Entity = (id: string, name = '') =>
    ({
      id,
      name: name || `name-${id}`,
    } as Kt1201Entity);

  let state: Kt1201PartialState;

  beforeEach(() => {
    state = {
      kt1201: kt1201Adapter.setAll(
        [createKt1201Entity('PRODUCT-AAA'), createKt1201Entity('PRODUCT-BBB'), createKt1201Entity('PRODUCT-CCC')],
        {
          ...initialState,
          selectedId: 'PRODUCT-BBB',
          error: ERROR_MSG,
          loaded: true,
        }
      ),
    };
  });

  describe('Kt1201 Selectors', () => {
    it('getAllKt1201() should return the list of Kt1201', () => {
      const results = Kt1201Selectors.getAllKt1201(state);
      const selId = getKt1201Id(results[1]);

      expect(results.length).toBe(3);
      expect(selId).toBe('PRODUCT-BBB');
    });

    it('getSelected() should return the selected Entity', () => {
      const result = Kt1201Selectors.getSelected(state) as Kt1201Entity;
      const selId = getKt1201Id(result);

      expect(selId).toBe('PRODUCT-BBB');
    });

    it('getKt1201Loaded() should return the current "loaded" status', () => {
      const result = Kt1201Selectors.getKt1201Loaded(state);

      expect(result).toBe(true);
    });

    it('getKt1201Error() should return the current "error" state', () => {
      const result = Kt1201Selectors.getKt1201Error(state);

      expect(result).toBe(ERROR_MSG);
    });
  });
});
