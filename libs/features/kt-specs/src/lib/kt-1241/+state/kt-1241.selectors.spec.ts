import { Kt1241Entity } from './kt-1241.models';
import { kt1241Adapter, Kt1241PartialState, initialState } from './kt-1241.reducer';
import * as Kt1241Selectors from './kt-1241.selectors';

describe('Kt1241 Selectors', () => {
  const ERROR_MSG = 'No Error Available';
  const getKt1241Id = (it: Kt1241Entity) => it.id;
  const createKt1241Entity = (id: string, name = '') =>
    ({
      id,
      name: name || `name-${id}`,
    } as Kt1241Entity);

  let state: Kt1241PartialState;

  beforeEach(() => {
    state = {
      kt1241: kt1241Adapter.setAll(
        [createKt1241Entity('PRODUCT-AAA'), createKt1241Entity('PRODUCT-BBB'), createKt1241Entity('PRODUCT-CCC')],
        {
          ...initialState,
          selectedId: 'PRODUCT-BBB',
          error: ERROR_MSG,
          loaded: true,
        }
      ),
    };
  });

  describe('Kt1241 Selectors', () => {
    it('getAllKt1241() should return the list of Kt1241', () => {
      const results = Kt1241Selectors.getAllKt1241(state);
      const selId = getKt1241Id(results[1]);

      expect(results.length).toBe(3);
      expect(selId).toBe('PRODUCT-BBB');
    });

    it('getSelected() should return the selected Entity', () => {
      const result = Kt1241Selectors.getSelected(state) as Kt1241Entity;
      const selId = getKt1241Id(result);

      expect(selId).toBe('PRODUCT-BBB');
    });

    it('getKt1241Loaded() should return the current "loaded" status', () => {
      const result = Kt1241Selectors.getKt1241Loaded(state);

      expect(result).toBe(true);
    });

    it('getKt1241Error() should return the current "error" state', () => {
      const result = Kt1241Selectors.getKt1241Error(state);

      expect(result).toBe(ERROR_MSG);
    });
  });
});
