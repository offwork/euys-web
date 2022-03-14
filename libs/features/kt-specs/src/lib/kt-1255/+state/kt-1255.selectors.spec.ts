import { Kt1255Entity } from './kt-1255.models';
import { kt1255Adapter, Kt1255PartialState, initialState } from './kt-1255.reducer';
import * as Kt1255Selectors from './kt-1255.selectors';

describe('Kt1255 Selectors', () => {
  const ERROR_MSG = 'No Error Available';
  const getKt1255Id = (it: Kt1255Entity) => it.id;
  const createKt1255Entity = (id: string, name = '') =>
    ({
      id,
      name: name || `name-${id}`,
    } as Kt1255Entity);

  let state: Kt1255PartialState;

  beforeEach(() => {
    state = {
      kt1255: kt1255Adapter.setAll(
        [createKt1255Entity('PRODUCT-AAA'), createKt1255Entity('PRODUCT-BBB'), createKt1255Entity('PRODUCT-CCC')],
        {
          ...initialState,
          selectedId: 'PRODUCT-BBB',
          error: ERROR_MSG,
          loaded: true,
        }
      ),
    };
  });

  describe('Kt1255 Selectors', () => {
    it('getAllKt1255() should return the list of Kt1255', () => {
      const results = Kt1255Selectors.getAllKt1255(state);
      const selId = getKt1255Id(results[1]);

      expect(results.length).toBe(3);
      expect(selId).toBe('PRODUCT-BBB');
    });

    it('getSelected() should return the selected Entity', () => {
      const result = Kt1255Selectors.getSelected(state) as Kt1255Entity;
      const selId = getKt1255Id(result);

      expect(selId).toBe('PRODUCT-BBB');
    });

    it('getKt1255Loaded() should return the current "loaded" status', () => {
      const result = Kt1255Selectors.getKt1255Loaded(state);

      expect(result).toBe(true);
    });

    it('getKt1255Error() should return the current "error" state', () => {
      const result = Kt1255Selectors.getKt1255Error(state);

      expect(result).toBe(ERROR_MSG);
    });
  });
});
