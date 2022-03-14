import { Kt1202Entity } from './kt-1202.models';
import { kt1202Adapter, Kt1202PartialState, initialState } from './kt-1202.reducer';
import * as Kt1202Selectors from './kt-1202.selectors';

describe('Kt1202 Selectors', () => {
  const ERROR_MSG = 'No Error Available';
  const getKt1202Id = (it: Kt1202Entity) => it.id;
  const createKt1202Entity = (id: string, name = '') =>
    ({
      id,
      name: name || `name-${id}`,
    } as Kt1202Entity);

  let state: Kt1202PartialState;

  beforeEach(() => {
    state = {
      kt1202: kt1202Adapter.setAll(
        [createKt1202Entity('PRODUCT-AAA'), createKt1202Entity('PRODUCT-BBB'), createKt1202Entity('PRODUCT-CCC')],
        {
          ...initialState,
          selectedId: 'PRODUCT-BBB',
          error: ERROR_MSG,
          loaded: true,
        }
      ),
    };
  });

  describe('Kt1202 Selectors', () => {
    it('getAllKt1202() should return the list of Kt1202', () => {
      const results = Kt1202Selectors.getAllKt1202(state);
      const selId = getKt1202Id(results[1]);

      expect(results.length).toBe(3);
      expect(selId).toBe('PRODUCT-BBB');
    });

    it('getSelected() should return the selected Entity', () => {
      const result = Kt1202Selectors.getSelected(state) as Kt1202Entity;
      const selId = getKt1202Id(result);

      expect(selId).toBe('PRODUCT-BBB');
    });

    it('getKt1202Loaded() should return the current "loaded" status', () => {
      const result = Kt1202Selectors.getKt1202Loaded(state);

      expect(result).toBe(true);
    });

    it('getKt1202Error() should return the current "error" state', () => {
      const result = Kt1202Selectors.getKt1202Error(state);

      expect(result).toBe(ERROR_MSG);
    });
  });
});
