import { Kt1208Entity } from './kt-1208.models';
import { kt1208Adapter, Kt1208PartialState, initialState } from './kt-1208.reducer';
import * as Kt1208Selectors from './kt-1208.selectors';

describe('Kt1208 Selectors', () => {
  const ERROR_MSG = 'No Error Available';
  const getKt1208Id = (it: Kt1208Entity) => it.id;
  const createKt1208Entity = (id: string, name = '') =>
    ({
      id,
      name: name || `name-${id}`,
    } as Kt1208Entity);

  let state: Kt1208PartialState;

  beforeEach(() => {
    state = {
      kt1208: kt1208Adapter.setAll(
        [createKt1208Entity('PRODUCT-AAA'), createKt1208Entity('PRODUCT-BBB'), createKt1208Entity('PRODUCT-CCC')],
        {
          ...initialState,
          selectedId: 'PRODUCT-BBB',
          error: ERROR_MSG,
          loaded: true,
        }
      ),
    };
  });

  describe('Kt1208 Selectors', () => {
    it('getAllKt1208() should return the list of Kt1208', () => {
      const results = Kt1208Selectors.getAllKt1208(state);
      const selId = getKt1208Id(results[1]);

      expect(results.length).toBe(3);
      expect(selId).toBe('PRODUCT-BBB');
    });

    it('getSelected() should return the selected Entity', () => {
      const result = Kt1208Selectors.getSelected(state) as Kt1208Entity;
      const selId = getKt1208Id(result);

      expect(selId).toBe('PRODUCT-BBB');
    });

    it('getKt1208Loaded() should return the current "loaded" status', () => {
      const result = Kt1208Selectors.getKt1208Loaded(state);

      expect(result).toBe(true);
    });

    it('getKt1208Error() should return the current "error" state', () => {
      const result = Kt1208Selectors.getKt1208Error(state);

      expect(result).toBe(ERROR_MSG);
    });
  });
});
