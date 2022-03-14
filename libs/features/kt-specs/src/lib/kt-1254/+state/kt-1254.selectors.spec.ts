import { Kt1254Entity } from './kt-1254.models';
import { kt1254Adapter, Kt1254PartialState, initialState } from './kt-1254.reducer';
import * as Kt1254Selectors from './kt-1254.selectors';

describe('Kt1254 Selectors', () => {
  const ERROR_MSG = 'No Error Available';
  const getKt1254Id = (it: Kt1254Entity) => it.id;
  const createKt1254Entity = (id: string, name = '') =>
    ({
      id,
      name: name || `name-${id}`,
    } as Kt1254Entity);

  let state: Kt1254PartialState;

  beforeEach(() => {
    state = {
      kt1254: kt1254Adapter.setAll(
        [createKt1254Entity('PRODUCT-AAA'), createKt1254Entity('PRODUCT-BBB'), createKt1254Entity('PRODUCT-CCC')],
        {
          ...initialState,
          selectedId: 'PRODUCT-BBB',
          error: ERROR_MSG,
          loaded: true,
        }
      ),
    };
  });

  describe('Kt1254 Selectors', () => {
    it('getAllKt1254() should return the list of Kt1254', () => {
      const results = Kt1254Selectors.getAllKt1254(state);
      const selId = getKt1254Id(results[1]);

      expect(results.length).toBe(3);
      expect(selId).toBe('PRODUCT-BBB');
    });

    it('getSelected() should return the selected Entity', () => {
      const result = Kt1254Selectors.getSelected(state) as Kt1254Entity;
      const selId = getKt1254Id(result);

      expect(selId).toBe('PRODUCT-BBB');
    });

    it('getKt1254Loaded() should return the current "loaded" status', () => {
      const result = Kt1254Selectors.getKt1254Loaded(state);

      expect(result).toBe(true);
    });

    it('getKt1254Error() should return the current "error" state', () => {
      const result = Kt1254Selectors.getKt1254Error(state);

      expect(result).toBe(ERROR_MSG);
    });
  });
});
